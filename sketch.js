var canvas,backgroundImage;
var voterCount=0;
var database;
var form,im;
var state=0;
database=firebase.database();

function setup(){
 
createCanvas(1200,800);
form=new Form();

}



function draw(){
  
  form.display();
 
  
}


