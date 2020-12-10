//Create variables here

var dog,Happydog;
var dogImg,HappydogImg;
var database;
var foodS,foodStock;


function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png");
  HappydogImg=loadImage("images/dogImg1.png");
}

function setup() {
// database=firebase.database();
 
database= firebase.initializeApp(firebaseConfig);


	createCanvas(500,500);
  
  var dog=createSprite(250,250,30,40);
     dog.addImge(dogImg);

  foodStock=database.ref('food');
  foodStock.on("value",readStock);

}

function draw() {  
background(rgb="46,139,87");

if(keyWentDown(UP_Arrow)){
  writeStock(foodS);
  dog.addImage(HappydogImg);
}

  drawSprites();
  testSixe(30);
  text("FoodStock",50,70);
  //add styles here

}

function writeStock(x){
if(x<-0){
  x=0;
}
else {
  x=x-1;
}

database.ref('/'.update)({
    food:x
  })
}




