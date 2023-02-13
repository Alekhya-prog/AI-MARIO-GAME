
noseX = 0 ;
noseY = 0;

function preload() {
	world_start = loadSound("world_start.wav");
mario_jump = loadSound("jump.wav");
mario_coin = loadSound("coin.wav");
game_over = loadSound ("gameover.wav");
kick_mario = loadSound ("kick.wav");
die_mario = loadSound ("mariodie.wav");

	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	video = createCapture (VIDEO);
	video.size (600 , 300);
   

  canvas.parent ("canvas");
  video.parent ("game_console") ; 

  posenet = ml5.poseNet (video , modal_loaded);
  posenet.on ('pose' , gotposes);
}

function modal_loaded () {
console.log ("modal is loaded");
}

function draw() {
	game();
}




function gotposes (results) {
if (results.length > 0) {
console.log (results);
noseX = results[0].pose.nose.x;
noseY = results [0].pose.nose.y;
}
}








