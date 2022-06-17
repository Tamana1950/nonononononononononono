function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(600,300);
    video.parent('game_console');

	poseNet = ml5.poseNet(video , modelLoaded);
	poseNet.on('pose' , gotPoses);
}

function draw() {
	background="background.jpg";
	if(noseX<300)
	{
      marioX=marioX-1;
	}
	if(noseX>300)
	{
		marioX=marioX+1;
	}

	if(noseY<150)
	{
      marioY=marioY-1;
	}
	if(noseY>150)
	{
		marioY=marioY+1;
	}
	image(img,marioX,marioY,40,70)
	game()


}

function modelLoaded()
{
	console.log('Model did not load lol');
}

function gotPoses(results)
{
	if(results.lenth > 0)
	{
		noseX = results[0],pose.nose.x;
		noseY = results[0],pose.nose.y;
        console.log("noseX =" + noseX + ", noseY = " + noseY);
	}
}







