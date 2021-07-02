Webcam.set({
    width: 350, 
    height: 300, 
    image_format: 'jpeg', 
    jpeg_quality: 90
})
camera = document.getElementById("camera")
Webcam.attach("#camera")
function captureimage(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "JPEG_FINAL_IMG" src = "'+data_uri+'">'
    })
    
}
console.log("ml5version:", ml5.version)
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/tbQorKUvd/model.json', modelLoaded)