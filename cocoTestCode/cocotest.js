detectObjectsInFrame = (model, video) => //arrow function allows for shorter function syntax () are arguments and returns default
{
    model.detect(video).then( predictions =>  //promise that the model will give output otherwise the main thread will lock (web app)
        {
            this.showDetections(predictions);

            requestAnimationFrame(() => //callback function is one that is pass as an argument to be executed at a later date
                                                // a function that accepts callback functions is called higher order function, that has the logic of what to do when callback is triggered
            {
                this.detectObjectsInFrame(model, video);
            }
            );
        }, (error) =>
        {
            console.log("Webcam did not work");
            console.log(error);
        }
    );
}

drawDetected = predictions =>
{
    let canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d');

    predictions.forEach(predictions =>
    {
        //properties of the boundary box
        const boundaries = predictions.getBBox();
        const x = boundaries.x;
        const y= boundaries.y;
        const width = boundaries.width;
        const height = boundaries.height;

        //drawing the boundary box
        ctx.beginPath();
        ctx.rect(x, y, width, height);
        ctx.stroke();
    })
    canvas.drawImage(document.getElementById('webCam'))
}

function main()
{
    let video = document.getElementById('webCam');

    //requesting permission to use webcam
   const webCam = navigator.mediaDevices.getUserMedia({
        video: true,
        audio:false
    }).then(stream =>
    {
        video.srcObject = stream;
        video.play();
    })

    const loadModel = cocoSsd.load();

    Promise.all([loadModel, webCam])
    .then(values =>
{
    this.detectObjectsInFrame(values[0], video.srcObject)
})
}