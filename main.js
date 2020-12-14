function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  Classifier = ml5.imageClassifier('MobileNet',modelLoaded);
}

function modelLoaded(){
  console.log("it works!!")
}
function draw(){
  image(video,0,0,300,300);
  Classifier.classify(video,got_result);
}

function got_result(error,results){
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
    document.getElementById("name_object").innerHTML= results[0].label;
    percent = results[0].confidence*100;
    document.getElementById("accuracy_object").innerHTML= percent.toFixed(1)+"%";
  }
}

