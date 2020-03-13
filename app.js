var board = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160];

const player1_Button = document.getElementById('player-1');
console.log(player1_Button);

player1_Button.addEventListener('click',rollDice_1);
 var player1=["Prograd",0,1000];
 var player1=["FacePrep",0,1000];
 
 function rollDice_1()
 {
     let position=Math.floor(Math.random()*6)+1;
     changePosition_1(player[1],position);
 }

function changePosition_1(old,currentPos) 