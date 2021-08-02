const btn = document.getElementById("snap");
const resnap = document.getElementById("resnap");
const result = document.getElementById("result");


//Initializing Webcam
Webcam.set({
    height: 300,
    width: 300,
    image_format: "jpeg",
    jpeq_quality: 100
});

//Displaying Webcam Image in Camera div element
Webcam.attach("#camera");

//Configuring Webcam Snap sound
const shutter = new Audio();
shutter.autoplay = true;
shutter.src = navigator.userAgent.match(/firefox/) ? "shutter.ogg" : "shutter.mp3";

//Taking Snapshot
btn.addEventListener('click', () => {
    result.style.display = "block";
    shutter.play();
    Webcam.snap(function (data_uri) {
        result.innerHTML = `<img src=${data_uri} />`
    })
});

//Retaking Snapshot
resnap.addEventListener("click", () => {
    result.style.display = "none";
    result.innerHTML = ''
});
