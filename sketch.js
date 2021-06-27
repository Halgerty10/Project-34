//Create variables here
var dog,happyDog,dogImg,dogHappy;
var foodS,foodStock;
var database;

function preload()
{
	//load images here
  dogImg = loadImage("Dog.png");
  
  dogHappy = loadImage("happydog.png");
 
}

function setup() {
  database = firebase.database();
  createCanvas(500,500);
  dog = createSprite(250,300,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.4;
  
  

  foodStock = database.ref('Food')
  foodStock.on("value",readStock,showError);
  
}


function draw() {  
  background(46,139,87);

  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
    }


  textSize(15);
  fill("White");
  text("Note: Use UP_ARROW key to feed Drago Milk ",100,150);

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  
  if(x <= 0){
    x = 0;
  }else{
    x = x-1;
  }
  

  database.ref('/').update({Food:x
  })
}


function showError(){
  console.log("show Error in code")
}