class Form {

  constructor() {
    this.input = createInput("Name");
    this.input1 = createInput("Age");
    this.button = createButton('submit');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.input1.hide();
    this.title.hide();
  }

  display(){
    background(124,196,125);
    this.title.html("Learn to Drive");
    this.title.position(130,20);
    this.title.style('font-size', '70px');
    this.title.style('color', 'skyblue');

    this.input1.position(170,230);
    this.input1.style('width', '250px');
    this.input1.style('height', '20px');
    this.input1.style('background', 'lavender');

    this.input.position(170,200);
    this.input.style('width', '250px');
    this.input.style('height', '20px');
    this.input.style('background', 'lavender');

    this.button.position(250,280);
    this.button.style('font-size', '15px');
    this.button.style('background', 'skyblue');
2
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.input1.hide();
        playerage  =this.input1.value();
        player.name = this.input.value();
        if(playerage>=18){
          this.greeting.html("Hello "+player.name);
          this.greeting.position(150,150);    
          mybutton = createButton('Next');
          mybutton.position(150,220);
          mybutton.mousePressed(()=>{
            mybutton.hide();
            game.update(1);
          })
          
          
        //var num = "swz"+player.age+1;
        //player.age= num;
          player.update();
          player.updateage(playerage);
        }

        else{
          this.greeting.html("Your are not eligible<br>to take the test");
          this.greeting.position(100,150);    
        }
        
    });

  }
}
