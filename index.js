var randomNumber1=(Math.floor((Math.random()*6)+1));
var randomNumber2=(Math.floor((Math.random()*6)+1));
randomNumber1=randomNumber1.toString();
randomNumber2=randomNumber2.toString();
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");
if(randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML="🚩Player 1 wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector('h1').innerHTML="🚩Player 2 wins";
}
else{
    document.querySelector('h1').innerHTML="Draw";
}