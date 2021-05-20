var starImg,bgImg;
var star, starBody,fairy,fairyImg,sd;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImg=loadImage("images/fairy.png")
sd=loadSound("sound/JoyMusic.mp3")
}

function setup() {
	createCanvas(800, 750);
fairy=createSprite(200,50);
fairy.addImage(fairyImg);
fairy.scale=0.2;
	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
sd.play();

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  fairy.x=mouseX;
  fairy.y=mouseY;
Engine.update(engine)
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  

  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right


	
}
