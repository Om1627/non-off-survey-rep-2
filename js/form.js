class Form{
    constructor(){

    }
   
    display(){
       if (state==0){
      
        resizeCanvas(200,200,true);
       
          
     var title=createElement('h1');
        title.html("The Students' Survey");
        title.position(100,0);
        
       
        
        
      var   input=createInput("",text); 
      var   input2=createInput("",text); 
      var   input3=createInput("",Number); 
    
        
        var button = createButton('Start');
        button.size(200,50)
        var greeting= createElement('h3');
        var greeting2= createElement('h3');
        var txt1 = createElement("h3");
        var txt2 = createElement("h3");
        var txt3= createElement("h3");
        txt1.html("Name");
        txt2.html("Email");
        txt3.html("Class");
        txt1.position(500,240);
        txt2.position(500,290);
        txt3.position(500,340);
        input.position(600,250);
        input2.position(600,300); 
        input3.position(600,350);                   
        button.position(600,400);
    }
                  
        button.mousePressed(function (){
            input.hide();
            input2.hide();
            input3.hide();
            button.hide();
            var name=input.value();
         var voteCount=database.ref('voteCount');
           database.ref('voteCount').set(1); 
           database.ref().push('voter'+voteCount);
           
            state=1;
           var im= createImg("zen.jpg");
           im.position(400,0);
            greeting.html("Hello "+name);
            greeting.position(400,500)
            greeting2.html("Welcome to the Students' Survey, "+name);
            greeting2.position(400,550)
           
        });
        
    }
   
  
}