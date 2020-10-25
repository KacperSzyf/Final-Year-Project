function loadCam() {
    const video = document.getElementById("webCam");

//get access to webcam
    navigator.mediaDevices
        .getUserMedia({
            video: true
        }).then(stream => {
        video.srcObject = stream;

    }).then(renderFrame)

}

function renderFrame()
{
    const video = document.getElementById('webCam');
    cocoSsd.load()
        .then(model => model.detect(video))
        .then(predictions =>
        {
            drawRect(predictions, video);
            requestAnimationFrame(renderFrame)
        });
}

drawRect = (predictions, image) =>
{
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0,0, 1280, 720);
    ctx.drawImage(image, 0, 0);


    predictions.forEach( prediction =>
    {
        const loc = prediction.bbox;
        const type = prediction.class;
        const score = prediction.score;
        const x = loc[0];
        const y = loc[1];
        const width = loc[2];
        const height = loc[3];
        ctx.fillStyle = 'red';
        ctx.strokeRect(x, y, width, height);
        ctx.fillText((type + ": " + score.toFixed(2)), x, y);
    });

}