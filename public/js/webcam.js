const btn = document.getElementById("snap");
const resnap = document.getElementById("resnap");
const result = document.getElementById("result");
const save = document.getElementById("save");
const imageUrl = document.getElementById("image-url");

var base64Data;

//Initializing Webcam
Webcam.set({
    height: 300,
    width: 300,
    image_format: "jpeg",
    jpeg_quality: 600
});

//Displaying Webcam Image in Camera div element
Webcam.attach("#camera");



//Taking Snapshot
btn.addEventListener('click', () => {
    result.style.display = "block";
    Webcam.snap(function (data_uri) {
        result.innerHTML = `<img id="imageprev" src=${data_uri} />`
    })
});

//Retaking Snapshot
resnap.addEventListener("click", () => {
    result.style.display = "none";
    result.innerHTML = '';
    imageUrl.innerHTML = '';
});

//Saving Snapshot
save.addEventListener("click", () => {
    // Get base64 value from <img id='imageprev'> source
    var base64image = document.getElementById("imageprev").src;

    base64Data = base64image.replace(/^data:image\/jpeg;base64,/, "");

    downloadImage(`${Date.now()}out.jpeg`, base64image);

    fetch("upload-photo", {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        //make sure to serialize your JSON body
        body: JSON.stringify({
            image: base64Data,
            path: `uploads/webcam/${Date.now()}out.jpeg`
        })
    })
        .then(response => response.json())
        .then((data) => {
            imageUrl.href = (data.link).slice(8);
            imageUrl.innerHTML = (data.link).slice(8);
        })
        .catch(err => console.log(err));

});


// DOWNLOAD THE IMAGE.
downloadImage = function (name, datauri) {
    imageUrl.href = (datauri).slice(8);
    imageUrl.innerHTML = (datauri).slice(8);
    var a = document.createElement('a');
    a.setAttribute('download', name);
    a.setAttribute('href', datauri);
    a.click();
}

