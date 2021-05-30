class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",(data)=>{
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerageRef = await database.ref('playerage').once("value");
      if(playerageRef.exists()){
        playerage = playerageRef.val();
        player.getage();

      }
      form = new Form()
      form.display();
    }

    traffic = createSprite(350,280,50,50);
    traffic.addImage("traffic",trafficimg);
    traffic.scale = 1.5;
   
  }


  play(){
      form.hide();
      Player.getPlayerInfo();
      background(173,133,133);      

      if(allPlayers !== undefined){
        for(var plr in allPlayers){
          fill(77,105,157);
          textSize(30);
          text("Welcome "+ allPlayers[plr].name,20,35);
          fill("black");
          textSize(20);
          question = createElement('h1');
          question.style('font-weight', '10px');
          question.html("See the Image carefully,<br>choose the correct option below,<br>Click to select answer");
          question.position(650,80)

          button1 = createButton('turn left');
          button1.style('font-weight', '40px');
          button1.style('border-radius', '10px');
          button1.style('background', 'skyblue');
          button1.position(650,300);

          button1 = createButton('turn left');
          button1.style('font-weight', '20px');
          button1.style('border-radius', '10px');
          button1.style('background', 'skyblue');
          button1.position(650,300);

          button2 = createButton('turn right');
          button2.style('font-weight', '20px');
          button2.style('border-radius', '10px');
          button2.style('background', 'skyblue');
          button2.position(850,300);

          button3 = createButton('take u turn');
          button3.style('font-weight', '20px');
          button3.style('border-radius', '10px');
          button3.style('background', 'skyblue');
          button3.position(650,350);

          button4 = createButton('no u turn');
          button4.style('font-weight', '20px');
          button4.style('border-radius', '10px');
          button4.style('background', 'skyblue');
          button4.position(850,350);

          button4.mousePressed(()=>{
           //button1.html('No way ahead');
           // button2.html('Two way');
            //button3.html('One way');
            //button4.html('Go straight');

            button1.hide();
            button2.hide();
            button3.hide();
            button4.hide();

            
        
            traffic.visible = false;
            traffic2 = createSprite(350,280,50,50);
            traffic2.addImage("traffic",traffic2img);
            traffic2.scale = 0.5;
          })

           

      
         
        
      }
      drawSprites();
    }

  } 

}