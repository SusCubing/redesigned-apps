var cube=document.getElementById("cube");
var money=document.getElementById("money");
var moneyclick=document.getElementById("moneyclick");
var purchase=document.getElementById("purchase");
var moneyamount=0;
var moneyperclick=1;
var upgradecost=50;
var cubesize=1;
var cubeupgrade=2;
function clickcube(){
	moneyamount+=moneyperclick;
	cube.src="img/"+cubesize+"x"+cubesize+".png";
	moneyclick.innerHTML=cubesize+"x"+cubesize+" - $"+moneyperclick+" per click";
	money.innerHTML="$"+moneyamount;
	cubeupgrade=cubesize+1;
	if(cubesize<10){
	purchase.innerHTML="Upgrade to "+cubeupgrade+"x"+cubeupgrade+" ($"+upgradecost+")";
	}
	if(cubesize==10){
		purchase.innerHTML="You reached 10x10 and beat the game!";
	}
}
function upgradecube(){
	if(moneyamount>=upgradecost&&cubesize<10){
		cubesize++;
		moneyperclick*=3;
		moneyamount-=upgradecost;
		upgradecost=Math.round(upgradecost*3.5);
		if(cubesize==10){
		moneyperclick=40000;
		}
		cube.src="img/"+cubesize+"x"+cubesize+".png";
		moneyclick.innerHTML=cubesize+"x"+cubesize+" - $"+moneyperclick+" per click";
		money.innerHTML="$"+moneyamount;
		cubeupgrade=cubesize+1;
		purchase.innerHTML="Upgrade to "+cubeupgrade+"x"+cubeupgrade+" ($"+upgradecost+")";
	}
	if(cubesize==10){
		purchase.innerHTML="You reached 10x10 and beat the game!";
	}
}
