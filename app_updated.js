class Players{
    construtor(name,position,money)
    this.name=name;
    this.position=position;
    this.money=money;
}
rolldice()
{
    let pos=Math.floor(math.random()*6)+1;
    console.log(pos);
    this.updatePosition(pos);
}
updatePosition(pos){
    this.position+=pos;
    console.log(this.position);
    this.updateMoney();
}

updateMoney()
{
if(this.position<board.lenght)
this.money=board(this.position);
else
{
this.position %=15;
this.money=board[this.position];
}
console.log(player1);
console.log(player2);
}

let player1 =new Player("FacePrep",0,1000);
let player2=new Player("Prograd",0,1000);

player1_Button.addEventListener('click',function()
{
    player1.rollDice();
},false);
player2_Button.addEventListener('click',function()
{
    player2.rollDice();
},false);

