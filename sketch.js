

var output
var i, healthcare1, greeting, button2, greeting2, button3, greeting3;
var angles = [ 30, 10, 45, 35, 60, 38, 75, 67 ];
let answers = [];
let score = [];

let dems = 0;
let ind = 0;
let cons = 0;

let finished = false;



let name = "nothing yet";


  function setup() {

    // create canvas
    createCanvas(1200, 1000);
    background(0);
    textSize(500)
    fill(0)
    text("hi")
    noStroke();
    noLoop();  // Run once and stop

    output = createInput();
    output.elt.placeholder = 'Enter your last name please.';
    output.input(storeName);
    output.position(50,510);
    output.size(150,20);

    makeButtons();

    LastName = createElement('h2','The votes are in:' );
    LastName.position(50,442.5);
    greeting = createElement('h2', 'Healthcare is big issue in the U.S President '+name+' how would you like us to approach it?');
    greeting.position(20, 5);
    greeting.hide();
    ciddems = createElement('h2','Democrat');
    ciddems.position(400, 525);
    ciddems.hide()
    cidreps = createElement('h2','Republican');
    cidreps.position(700,525);
    cidreps.hide()
    cidinds = createElement('h2','Independent');
    cidinds.position(550,300);
    cidinds.hide()
    textAlign(CENTER);
    textSize(50);
  }

  function draw() {
    background(255);
    flag();

  }

function flag(){
    // Draw and shade the flag pole
    var poleWidth = 40;
    fill(200);
    rect(0, 0, poleWidth, height);
    for (var poleShade = 0; poleShade < poleWidth; poleShade ++) {
      stroke(poleShade / (poleWidth * 2) * 700, 150);
      line(poleShade, 0, poleShade, height);
    }

    // Set the flag size
    var flagWidth = 1000;
    var flagHeight = 650;

    // Draw the red stripes
    var stripeHeight = 50;
    fill(178, 34, 52);
    noStroke();
    for (var stripes = 0; stripes < flagHeight; stripes += stripeHeight * 2) {
      rect(poleWidth, stripes, flagWidth, stripeHeight);

    }

    // Draw the blue box
    fill(60, 59, 110);
    rect(poleWidth, 0, 420, stripeHeight * 7);

    // Draw the first row of white stars
    fill(255);
    for (var starRow1V = 17.5; starRow1V <= 315; starRow1V += 70) {
      for (var starRow1X = 75, starRow1Y = starRow1V; starRow1X <= 425; starRow1X += 70) {
        beginShape();
        vertex(starRow1X, starRow1Y);
        vertex(starRow1X + 11.5, starRow1Y + 35);
        vertex(starRow1X - 19, starRow1Y + 13);
        vertex(starRow1X + 19, starRow1Y + 13);
        vertex(starRow1X - 11.5, starRow1Y + 35);
        vertex(starRow1X, starRow1Y);
        endShape();
      }
    }

    // Draw the second row of white stars
    for (var starRow2V = 17.5; starRow2V <= 280; starRow2V += 70) {
      for (var starRow2X = 110, starRow2Y = starRow2V + 35; starRow2X <= 425; starRow2X += 70) {
        beginShape();
        vertex(starRow2X, starRow2Y);
        vertex(starRow2X + 11.5, starRow2Y + 35);
        vertex(starRow2X - 19, starRow2Y + 13);
        vertex(starRow2X + 19, starRow2Y + 13);
        vertex(starRow2X - 11.5, starRow2Y + 35);
        vertex(starRow2X, starRow2Y);
        endShape();
      }
    }

    // Shade the flag in three transparent gradients
    for (var gradient1 = 40; gradient1 < 373; gradient1 ++) {
      stroke(gradient1 / flagWidth * 3 * 255, 50);
      line(gradient1, 0, gradient1, flagHeight);
    }
    for (var gradient2A = 373, gradient2B = 255; gradient2A < 706; gradient2A ++, gradient2B --) {
      stroke(gradient2B, 50);
      line(gradient2A, 0, gradient2A, flagHeight);
    }
    for (var gradient3A = 706, gradient3B = 0; gradient3A < width; gradient3A ++, gradient3B ++) {
      stroke(gradient3B / flagWidth * 3 * 255, 50);
      line(gradient3A, 0, gradient3A, flagHeight);
    }
  }

function storeName(){
  name = this.value();
  print(name);
}

function makeButtons(){

  button = createButton('vote');
   button.position(205,512.5, 100);
   button.mousePressed(name1);



  healthcare1 = createButton('To expand access to health insurance, protect patients against arbitrary actions by insurance companies, and reduce costs.');
  healthcare1.position(60, 150);
  healthcare1.size(225,225);
  healthcare1.mousePressed(greet);
  healthcare1.hide()

  healthcare2 = createButton('Create healthcare subsidies for american people based on their income, without mandatating certain healthcare providers with whom these subsidies can be used, to help everyone chose the exact care they want');
  healthcare2.position(400,150);
  healthcare2.size(225,225)
  healthcare2.mousePressed(greet2);
  healthcare2.hide()

      healthcare3 = createButton('A patient-centered health care system, which is based in free markets, fostering competition and driving health care costs down.');
      healthcare3.position(760,150);
      healthcare3.size(225,225);
      healthcare3.mousePressed(greet3);
      healthcare3.hide()


      BirthControl1 = createButton('Commit to protecting and advancing reproductive health, rights, and justice. Every woman should have access to quality reproductive health care services, including safe and legal abortion—regardless of where she lives, how much money she makes, or how she is insured.');
      BirthControl1.position(60,150);
      BirthControl1.size(225,225);
      BirthControl1.mousePressed(choice1);
      BirthControl1.hide()

      BirthControl2 = createButton('Larger focus on sexual education rather then changing current laws on abortion as changing the availibility of abortions does nothing to decrease the number of unplanned pregnancies or sexually trasmitted diseases.');
      BirthControl2.position(400,150);
      BirthControl2.size(225,225);
      BirthControl2.mousePressed(choice2);
      BirthControl2.hide()


      BirthControl3 = createButton('Pass legislation to defund Planned Parenthood. The half a million dollars provided to Planned Parenthood through the federal government will be cut. We will object to abortions, and the possibility that these federal funds are going towards what our party considers to be murder.');
      BirthControl3.position(760,150);
      BirthControl3.size(225,225);
      BirthControl3.mousePressed(choice3);
      BirthControl3.hide()

      Guns1 = createButton('We will subject the right to own firearms to reasonable regulation. We will focus on effective enforcement of existing laws, especially strengthening our background check system, and we will work together to enact commonsense improvements like reinstating the assault weapons ban and closing the gun show loophole, so that guns do not fall into the hands of those irresponsible, law-breaking few.')
      Guns1.position(60,150);
      Guns1.size(225,225);
      Guns1.mousePressed(exec1);
      Guns1.hide()

      Guns2 = createButton('Improved mental health reporting must be a matter of federal law, because current state laws on guns vary widely and have limited effectiveness.')
      Guns2.position(400,150);
      Guns2.size(225,225);
      Guns2.mousePressed(exec2);
      Guns2.hide()

      Guns3 = createButton('We will uphold the right of individuals to keep and bear arms. We will acknowledge, support, and defend the law-abiding citizens God given right of self-defense. We will call for the protection of such fundamental individual rights, and we recognize the individual responsibility to safely use and store firearms. This also includes the right to obtain and store ammunition without registration, the right to self-defense wherever a law-abiding citizen has a legal right to be.')
      Guns3.position(760,150);
      Guns3.size(225,225);
      Guns3.mousePressed(exec3);
      Guns3.hide()

      Affirmative1 = createButton('Continue to support affirmative action to ensure that applicants are employed, and that employees are treated during employment, without regard to their race, creed, color, or national origin')
      Affirmative1.position(60,150);
      Affirmative1.size(225,225);
      Affirmative1.mousePressed(action1);
      Affirmative1.hide()

      Affirmative2 = createButton('')
      Affirmative2.position(400,150);
      Affirmative2.size(225,225);
      Affirmative2.mousePressed(action2);
      Affirmative2.hide()

      Affirmative3 = createButton('Repeal such policies that force employers and schools to consider lesser-qualified candidates for the sake of having a more diverse representation, this is to maintain a merit-based system both within elite educational institutions and the American workforce.')
      Affirmative3.position(760,150);
      Affirmative3.size(225,225);
      Affirmative3.mousePressed(action3);
      Affirmative3.hide()

      Gay1 = createButton('Yes, but allow churches the right to refuse same-sex ceremonies')
      Gay1.position(60,150);
      Gay1.size(225,225);
      Gay1.mousePressed(rights1);
      Gay1.hide()

      Gay2 = createButton('Legalize gay marriage in states that vote for it. However, not forcing those who have religious beliefs to do so.')
      Gay2.position(400,150);
      Gay2.size(225,225);
      Gay2.mousePressed(rights2);
      Gay2.hide()

      Gay3 = createButton('No, allow civil unions but don’t call it marriage')
      Gay3.position(760,150);
      Gay3.size(225,225);
      Gay3.mousePressed(rights3);
      Gay3.hide()

      Death1 = createButton('No')
      Death1.position(60,150);
      Death1.size(225,225);
      Death1.mousePressed(Pen1);
      Death1.hide()

      Death2 = createButton('End the death penalty. Even for those presently on death row. Substitute life without possibility of parole. Then build or reclassify a present prison to be used solely, wholly and only for these prisoners. Provide every safeguard possible for staff and prisoners.')
      Death2.position(400,150);
      Death2.size(225,225);
      Death2.mousePressed(Pen2);
      Death2.hide()

      Death3 = createButton('Yes, but only for horrific crimes with undeniable evidence')
      Death3.position(760,150);
      Death3.size(225,225);
      Death3.mousePressed(Pen3);
      Death3.hide()

      Global1 = createButton('Yes');
      Global1.position(60,150);
      Global1.size(225,225);
      Global1.mousePressed(Warm1);
      Global1.hide();

      Global2 = createButton('Only donate to specific organisations that shown progress towards helping reduce the climate change.')
      Global2.position(400,150);
      Global2.size(225,225);
      Global2.mousePressed(Warm2);
      Global2.hide();

      Global3 = createButton('No');
      Global3.position(760,150);
      Global3.size(225,225);
      Global3.mousePressed(Warm3);
      Global3.hide()

      Net1 = createButton('No, treat all traffic equally and continue the openness of the internet');
      Net1.position(60,150);
      Net1.size(225,225);
      Net1.mousePressed(Neut1);
      Net1.hide()

      Net2 = createButton('');
      Net2.position(400,150);
      Net2.size(225,225);
      Net2.mousePressed(Neut2);
      Net2.hide()

      Net3 = createButton('Yes, but only give priority by type (video over images) and not source (big website over little website)');
      Net3.position(760,150);
      Net3.size(225,225);
      Net3.mousePressed(Neut3);
      Net3.hide()

      weed1 = createButton('No, this would be too costly and ineffective')
      weed1.position(60,150);
      weed1.size(225,225);
      weed1.mousePressed(Mari1);
      weed1.hide()

      weed2 = createButton('No, but increase our military presence along the southern border');
      weed2.position(400,150);
      weed2.size(225,225);
      weed2.mousePressed(Mari2);
      weed2.hide()

      weed3 = createButton('Yes')
      weed3.position(760,150);
      weed3.size(225,225);
      weed3.mousePressed(Mari3);
      weed3.hide()

}

function calculate(){
    for (let i = 0; i < answers.length;i++){
     if(answers[i]=="Democrat"){
        dems=dems+1;
      }

     if(answers[i]=="Conservative"){
       cons=cons+1;

    }
    if(answers[i]=="Independent"){
      ind = ind+1
    }
  }
     print("You answered "+dems+" questions with Democrat answers.");
     print("You answered "+cons+" questions with Conservative answers.");
     greeting.html("Healthcare is big issue in the U.S President "+name+ ", how would you like us to approach it?");
     print("You answered "+ind+" questions with Independent answers.");
     print(answers);

  let consPercent = (360/answers.length)*cons;
  print("degrees for conservative = "+consPercent);
  score.push(consPercent);

  let demPercent = (360/answers.length)*dems;
  print("degrees for democrat = "+demPercent);
  score.push(demPercent);

  let indPercent = (360/answers.length)*ind;
  print("degrees for independent = "+indPercent);
  score.push(indPercent);

  print(score);
}

function keyPressed(){
  if(keyCode === 13){ //Enter
    calculate();
  }

   if (keyCode === LEFT_ARROW) {
     pieChart(300, score);
   }

}

function pieChart(diameter, data) {
  var lastAngle = 0;
  for (var i = 0; i < data.length; i++) {
    if(i==0){
      fill("red");
    }
    else if(i==1){
      fill("blue");
    }
    else if(i==2){
      fill("purple");
    }
    else{
      fill("gray");
    }
    arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle+radians(data[i]));
    lastAngle += radians(data[i]);
  }
}

function name1() {
  healthcare1.show();
  healthcare2.show();
  healthcare3.show();
  greeting.show()
  LastName.hide()
  button.hide();
  output.hide();

}


  function greet() {

    greeting.html('The American people wait for our stance on Abortion rights, how do we respond?');

    answers.push("Democrat");

    healthcare1.hide();
    healthcare2.hide()
    healthcare3.hide()
    BirthControl1.show()
    BirthControl2.show()
    BirthControl3.show()

}
    function greet2() {
      //var orders = input.value();
      greeting.html('The American people wait for our stance on Abortion rights, how do we respond?');
      //input.value('');
      answers.push("Independent");
    //  print(answers);
      healthcare3.hide()
      healthcare2.hide()
      healthcare1.hide()
      BirthControl1.show()
      BirthControl2.show()
      BirthControl3.show()
}
        function greet3() {
          //var orders = input.value();
          greeting.html('The American people wait for our stance on Abortion rights, how do we respond?');
          //input.value('');
          answers.push("Conservative");
      //    print(answers);
          healthcare3.hide()
          healthcare2.hide()
          healthcare1.hide()
          BirthControl1.show()
          BirthControl2.show()
          BirthControl3.show()
}
          function choice1() {
            greeting.html('There was recently a large shooting, people are demanding we take action. What approach should we take?')
            answers.push("Democrat");
        //    print(answers);
            BirthControl1.hide()
            BirthControl2.hide()
            BirthControl3.hide()
            Guns1.show()
            Guns2.show()
            Guns3.show()
}
          function choice2() {
            greeting.html('There was recently a large shooting, people are demanding we take action. What approach should we take?!')
            answers.push("Independent");
        //    print(answers);
            BirthControl1.hide()
            BirthControl2.hide()
            BirthControl3.hide()
            Guns1.show()
            Guns2.show()
            Guns3.show()
          }

function choice3() {
  greeting.html('There was recently a large shooting, people are demanding we take action. What approach should we take?')
  answers.push("Conservative");
  // print(answers);
  BirthControl1.hide()
  BirthControl2.hide()
  BirthControl3.hide()
  Guns1.show()
  Guns2.show()
  Guns3.show()
}

function exec1() {
  greeting.html('Recently, there has been a lawsuit against a well know university for discrimation. How should we respond to Affirmative action? ')
  answers.push("Democrat");
  // print(answers);
  Guns1.hide()
  Guns2.hide()
  Guns3.hide()
  Affirmative1.show()
  Affirmative2.show()
  Affirmative3.show()
}
function exec2() {
  greeting.html('Recently, there has been a lawsuit against a well know university for discrimation. How should we respond to Affirmative action?')
  answers.push("Independent");
  // print(answers);
  Guns1.hide()
  Guns2.hide()
  Guns3.hide()
  Affirmative1.show()
  Affirmative2.show()
  Affirmative3.show()
}
function exec3() {
  greeting.html('Recently, there has been a lawsuit against a well know university for discrimation. How should we respond to Affirmative action?')
  answers.push("Conservative");
  // print(answers);
  Guns1.hide()
  Guns2.hide()
  Guns3.hide()
  Affirmative1.show()
  Affirmative2.show()
  Affirmative3.show()
}
function action1() {
  greeting.html('Approval of Gay Marriage is 67%, however there are some who do not want to be forced to serve them because of their religious beliefs. How should we resolve this? ')
  answers.push("Democrat");
  // print(answers);
  Affirmative1.hide()
  Affirmative2.hide()
  Affirmative3.hide()
  Gay1.show()
  Gay2.show()
  Gay3.show()
}
function action2() {
  greeting.html('Approval of Gay Marriage is 67%, however there are some who do not want to be forced to serve them because of their religious beliefs. How should we resolve this?')
  answers.push("Independent");
  // print(answers);
  Affirmative1.hide()
  Affirmative2.hide()
  Affirmative3.hide()
  Gay1.show()
  Gay2.show()
  Gay3.show()
}
function action3() {
  greeting.html('Approval of Gay Marriage is 67%, however there are some who do not want to be forced to serve them because of their religious beliefs. How should we resolve this?')
  answers.push("Conservative");
  // print(answers);
  Affirmative1.hide()
  Affirmative2.hide()
  Affirmative3.hide()
  Gay1.show()
  Gay2.show()
  Gay3.show()
}
function rights1() {
  greeting.html('Many view the Death Penalty as a barbaric. Should we ban the penalty President '+name+'')
  answers.push("Democrat")
  // print(answers);
  Gay1.hide()
  Gay2.hide()
  Gay3.hide()
  Death1.show()
  Death2.show()
  Death3.show()
}
function rights2() {
  greeting.html('Many view the Death Penalty as a barbaric. Should we ban the penalty President '+name+'')
  answers.push("Independent");
  // print(answers);
  Gay1.hide()
  Gay2.hide()
  Gay3.hide()
  Death1.show()
  Death2.show()
  Death3.show()

}
function rights3() {
  greeting.html('Many view the Death Penalty as a barbaric. Should we ban the penalty President '+name+'')
  answers.push("Conservative");
  // print(answers);
  Gay1.hide()
  Gay2.hide()
  Gay3.hide()
  Death1.show()
  Death2.show()
  Death3.show()
}
function Pen1() {
  greeting.html('Should we support efforts to end Climate Change?')
  answers.push("Democrat");
  // print(answers);
  Death1.hide()
  Death2.hide()
  Death3.hide()
  Global1.show()
  Global2.show()
  Global3.show()
}
function Pen2() {
  greeting.html('Should we support efforts to end Climate Change?')
  answers.push("Independent");
  // print(answers);
  Death1.hide()
  Death2.hide()
  Death3.hide()
  Global1.show()
  Global2.show()
  Global3.show()

}
function Pen3() {
  greeting.html('Should we support efforts to end Climate Change?')
  answers.push("Conservative");
  // print(answers);
  Death1.hide()
  Death2.hide()
  Death3.hide()
  Global1.show()
  Global2.show()
  Global3.show()
}
  function Warm1() {
    greeting.html('Should internet service providers be allowed to speed up access to popular websites (that pay higher rates) at the expense of slowing down access to less popular websites (that pay lower rates)?')
    answers.push("Democrat");
    // print(answers);
    Global1.hide()
    Global2.hide()
    Global3.hide()
    Net1.show()
    Net2.show()
    Net3.show()
}
  function Warm2() {
    greeting.html('Should internet service providers be allowed to speed up access to popular websites (that pay higher rates) at the expense of slowing down access to less popular websites (that pay lower rates)?')
    answers.push("Independent");
    // print(answers);
    Global1.hide()
    Global2.hide()
    Global3.hide()
    Net1.show()
    Net2.show()
    Net3.show()
  }
  function Warm3() {
    greeting.html('Should internet service providers be allowed to speed up access to popular websites (that pay higher rates) at the expense of slowing down access to less popular websites (that pay lower rates)?')
    answers.push("Conservative");
    // print(answers);
    Global1.hide()
    Global2.hide()
    Global3.hide()
    Net1.show()
    Net2.show()
    Net3.show()
}
    function Neut1() {
      greeting.html('Should the U.S. build a wall along the southern border?')
      answers.push("Democrat");
      // print(answers);
      Net1.hide()
      Net2.hide()
      Net3.hide()
      weed1.show()
      weed2.show()
      weed3.show()
}
function Neut2() {
  greeting.html('Should the U.S. build a wall along the southern border?')
  answers.push("Independent");
  // print(answers);
  Net1.hide()
  Net2.hide()
  Net3.hide()
  weed1.show()
  weed2.show()
  weed3.show()
}
function Neut3() {
  greeting.html('Should the U.S. build a wall along the southern border?')
  answers.push("Conservative");
  // print(answers);
  Net1.hide()
  Net2.hide()
  Net3.hide()
  weed1.show()
  weed2.show()
  weed3.show()
}
  function Mari1() {
    greeting.html('')
    answers.push("Democrat");
    weed1.hide()
    weed2.hide()
    weed3.hide()
    ciddems.show()
    cidreps.show()
    cidinds.show()
    // print(answers);
  }
  function Mari2() {
    greeting.html('')
    answers.push("Independent");
    // print(answers);
    weed1.hide()
    weed2.hide()
    weed3.hide()
    ciddems.show()
    cidreps.show()
    cidinds.show()
  }
  function Mari3() {
    greeting.html('')
    answers.push("Conservative");
    // print(answers);
    weed1.hide()
    weed2.hide()
    weed3.hide()
    ciddems.show()
    cidreps.show()
    cidinds.show()

  console.log(calculate)
}
