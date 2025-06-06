window.onload= function(){
     alert("Rules:\n1.Tap the avacado to score 5 points\n2.Game over if carrot is clicked.\nGOOD LUCK!");
    setGame();
}

var currentInnerMole= null;
var currentInnerBait=null;
var score=0;

function setGame(){
   for(var i=0;i<9;i++){
    var tile= document.createElement("div");
    tile.id=i.toString();

    tile.addEventListener("click", addScore);
    document.getElementById("board").appendChild(tile);
}
    setInterval(setMole,500);
    setInterval(setBait,500);

}

  

   function randomNumber(){
       var num= Math.floor(Math.random()*9);
       return num;
   }

function setMole(){
    if(currentInnerMole){
        currentInnerMole.remove();
    }

    var num1= randomNumber();
    var mole= document.createElement("img");
    mole.src = "./mole.png";
    var currentMole=document.getElementById(num1.toString());
    

    currentInnerMole=currentMole.appendChild(mole);
}
    
function setBait(){
    if(currentInnerBait){
        currentInnerBait.remove();
    }

    var num2= randomNumber();
    var bait= document.createElement("img");
    bait.src = "./bait.png";
    var currentBait= document.getElementById(num2.toString());

    if(currentBait.innerHTML ==""){
        currentInnerBait= currentBait.appendChild(bait);
    }
     else{
        return;
     }
}

function addScore(){
    if(this.contains(currentInnerMole)){
        score+=5;
        document.getElementById("score").innerText=score;
    }

    else if(this.contains(currentInnerBait)){
        alert("GAME OVER!\n Your score is:"+ score+" 🎉");
        score=0;
        document.getElementById("score").innerText=score;
    }
}
