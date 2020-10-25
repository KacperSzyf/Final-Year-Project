


function main()
{
    let image = document.getElementById('img')


    cocoSsd.load()
        .then(model => model.detect(image))
        .then(predictions =>
        {
            console.log(predictions);
            console.log(predictions[0].bbox);
            drawRect(predictions, image);
        });
}

drawRect = (predictions, image) =>
{
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);


    predictions.forEach( prediction =>
    {
        const loc = prediction.bbox;
        const x = loc[0];
        const y = loc[1];
        const width = loc[2];
        const height = loc[3];

        ctx.strokeRect(x, y, width, height);
    });
    // for (let i = 0; i <= prediction.length; i++)
    // {
    //     const loc = prediction[i].bbox;
    //     const x = loc[0];
    //     const y = loc[1];
    //     const width = loc[2];
    //     const height = loc[3];
    //     ctx.strokeRect(x, y, width, height);
    //     console.log("success with drawing");
    // }
}