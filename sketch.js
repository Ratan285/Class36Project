var dog, sadDog, happyDog, database;
var foodS, foodStock;
var addFood;
var foodObj;

var feed, lastFeed, lastFeedTime;


function preload() {
  sadDog = loadImage("Dog.png");
  happyDog = loadImage("happy dog.png");
}

function setup() {
  database = firebase.database();
  createCanvas(1000, 400);

  foodObj = new Food();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

  dog = createSprite(800, 200, 150, 150);
  dog.addImage(sadDog);
  dog.scale = 0.15;

  lastFeed = createButton("Feed the Dog");
  lastFeed.position(690, 95);
  lastFeed.mousePressed(lastFeedFunction);

  addFood = createButton("Add Food");
  addFood.position(800, 95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46, 139, 87);
  foodObj.display();

  lastFeedTime = database.ref('FeedTime');

  //write code to read fedtime value from the database 

  //write code to display text lastFed time here
  lastFeedTimeText = text("last feed: " + lastFeedTime, 600, 95);


  drawSprites();
}

//function to read food Stock
function readStock(data) {
  foodS = data.val();
  foodObj.updateFoodStock(foodS);
}


function feedDog() {
  dog.addImage(happyDog);

  //write code here to update food stock and last fed time

}

//function to add food in stock
function addFoods() {
  foodS++;
  database.ref('/').update({
    Food: foodS
  })
}

function lastFeedFunction() {
  foodS = foodS - 1
  database.ref('/').update({
    Food: foodS
  })
}
function updateTime() {

}
