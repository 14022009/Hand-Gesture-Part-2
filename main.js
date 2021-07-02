Webcam.set({
    width: 400,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

Webcam.attach(document.getElementById("webcam_dis"));
console.log("ml5 version", ml5.version);

function take_pic() {
    Webcam.snap(function (snap) {
        document.getElementById("webcam_dis_s").innerHTML = "<img id='webcamera' src = " + snap + ">";
    });
}
classfiys = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/1rznGgd4M/model.json', model_load);

function model_load() {
    console.log("my modal is loded");
}