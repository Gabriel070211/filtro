nosex=0;
nosey=0;
function preload() {
  img=loadImage("abacate.png")
}

function setup() {
  canvas=createCanvas(300, 300)
  canvas.center()
  video= createCapture(VIDEO)
  video.size(300, 300)
  video.hide()
  poseNet=ml5.poseNet(video, modelLoaded)
  poseNet.on("pose",gotPoses)
}

function modelLoaded() {
  console.log("modelo foi carregado")
}



function gotPoses(results) {
  console.log(results)
  if(results.length>0) {
    nosex=results[0].pose.nose.x-165
    nosey=results[0].pose.nose.y-170
  }
}

function draw() {
  image(video, 0,0, 300, 300)
  image(img, nosex,nosey, 300,300)
}

function takeSnapshot() {
  save("foto.png")
}
