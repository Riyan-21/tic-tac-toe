const box1 = document.getElementById("b1");
const box2 = document.getElementById("b2");
const box3 = document.getElementById("b3");
const box4 = document.getElementById("b4");
const box5 = document.getElementById("b5");
const box6 = document.getElementById("b6");
const box7 = document.getElementById("b7");
const box8 = document.getElementById("b8");
const box9 = document.getElementById("b9");
const reset = document.getElementById("reset");
const result = document.getElementById("result");
const res = result;
const turn = document.getElementById("turn");
const boxes = document.querySelectorAll("box");

var n = 1;
if(n%2 == 0){
    turn.innerHTML = "Next move for O";
}
else if(n%2 != 0){
    turn.innerHTML = "Next move for X";
};

//Code for box1
box1.addEventListener("click", function(){ 
    if(n%2 == 0){
        t = "O";
    }
    else if(n%2 != 0){
        t = "X";
    };
    n = n+1;
    if(t=="O" && box1.innerHTML == " "){
        turn.innerHTML = "Next move for X";
    }
    else if(t=="X" && box1.innerHTML == " "){
        turn.innerHTML = "Next move for O";
    };
    if( box1.innerHTML == " "){
        box1.innerHTML = t;
    };
    if(box1.innerHTML == box2.innerHTML && box2.innerHTML == box3.innerHTML ){
        box1.style.color = "darkred";
        box2.style.color = "darkred";
        box3.style.color = "darkred";
        result.innerHTML = box1.innerHTML+" is the WINNER!"
    }
    else if(box1.innerHTML == box4.innerHTML && box1.innerHTML == box7.innerHTML ){
        box1.style.color = "darkred";
        box4.style.color = "darkred";
        box7.style.color = "darkred";
        result.innerHTML = box1.innerHTML+" is the WINNER!"
    }
    else if(box1.innerHTML == box5.innerHTML && box1.innerHTML == box9.innerHTML ){
        box1.style.color = "darkred";
        box5.style.color = "darkred";
        box9.style.color = "darkred";
        result.innerHTML = box1.innerHTML+" is the WINNER!"
    }
    else if(
        box1.innerHTML!= " " && 
        box2.innerHTML!= " " && 
        box3.innerHTML!= " " && 
        box4.innerHTML!= " " && 
        box5.innerHTML!= " " && 
        box6.innerHTML!= " " && 
        box7.innerHTML!= " " && 
        box8.innerHTML!= " " && 
        box9.innerHTML!= " "
    ){
        result.innerHTML = "Match DRAW!"
    }; 
    if(result.innerHTML != ""){
        result.style.display = "block";
    };
});

//Code for box2
box2.addEventListener("click", function(){ 
    if(n%2 == 0){
        t = "O";
    }
    else if(n%2 != 0){
        t = "X";
    };
    n = n+1;
    if(t=="O" && box2.innerHTML == " "){
        turn.innerHTML = "Next move for X";
    }
    else if(t=="X" && box2.innerHTML == " "){
        turn.innerHTML = "Next move for O";
    };
    if( box2.innerHTML == " "){
        box2.innerHTML = t;
    };
    if(box1.innerHTML == box2.innerHTML && box2.innerHTML == box3.innerHTML ){
        box1.style.color = "darkred";
        box2.style.color = "darkred";
        box3.style.color = "darkred";
        res.innerHTML = box1.innerHTML+" is the WINNER!"
    }
    else if(box2.innerHTML == box5.innerHTML && box5.innerHTML == box8.innerHTML ){
        box2.style.color = "darkred";
        box5.style.color = "darkred";
        box8.style.color = "darkred";
        res.innerHTML = box5.innerHTML+" is the WINNER!"
    }
    else if(
       box1.innerHTML!= " " && 
       box2.innerHTML!= " " && 
       box3.innerHTML!= " " && 
       box4.innerHTML!= " " && 
       box5.innerHTML!= " " && 
       box6.innerHTML!= " " && 
       box7.innerHTML!= " " && 
       box8.innerHTML!= " " && 
       box9.innerHTML!= " "
    ){
       res.innerHTML = "Match DRAW!"
    };
    if(result.innerHTML != ""){
        result.style.display = "block";
    };
}); 

//Code for box3
box3.addEventListener("click", function(){ 
    if(n%2 == 0){
        t = "O";
    }
    else if(n%2 != 0){
        t = "X";
    };
    n = n+1;
    if(t=="O" && box3.innerHTML == " "){
        turn.innerHTML = "Next move for X";
    }
    else if(t=="X" && box3.innerHTML == " "){
        turn.innerHTML = "Next move for O";
    }; 
    if( box3.innerHTML == " "){
        box3.innerHTML = t;
    };
    if(box1.innerHTML == box2.innerHTML && box2.innerHTML == box3.innerHTML ){
        box1.style.color = "darkred";
        box2.style.color = "darkred";
        box3.style.color = "darkred";
        res.innerHTML = box1.innerHTML+" is the WINNER!"
    }
    else if(box3.innerHTML == box6.innerHTML && box3.innerHTML == box9.innerHTML ){
        box3.style.color = "darkred";
        box6.style.color = "darkred";
        box9.style.color = "darkred";
        res.innerHTML = box3.innerHTML+" is the WINNER!"
    }
    else if(box3.innerHTML == box5.innerHTML && box3.innerHTML == box7.innerHTML ){
        box3.style.color = "darkred";
        box5.style.color = "darkred";
        box7.style.color = "darkred";
        res.innerHTML = box3.innerHTML+" is the WINNER!"
    }
    else if(
        box1.innerHTML!= " " && 
        box2.innerHTML!= " " && 
        box3.innerHTML!= " " && 
        box4.innerHTML!= " " && 
        box5.innerHTML!= " " && 
        box6.innerHTML!= " " && 
        box7.innerHTML!= " " && 
        box8.innerHTML!= " " && 
        box9.innerHTML!= " "
    ){
        res.innerHTML = "Match DRAW!"
    };
    if(result.innerHTML != ""){
        result.style.display = "block";
    };   
}); 

//Code for box4
box4.addEventListener("click", function(){ 
    if(n%2 == 0){
        t = "O";
    }
    else if(n%2 != 0){
        t = "X";
    };
    n = n+1;
    if(t=="O" && box4.innerHTML == " "){
        turn.innerHTML = "Next move for X";
    }
    else if(t=="X" && box4.innerHTML == " "){
        turn.innerHTML = "Next move for O";
    };
    if( box4.innerHTML == " "){
        box4.innerHTML = t;
    };
    if(box1.innerHTML == box4.innerHTML && box4.innerHTML == box7.innerHTML ){
        box1.style.color = "darkred";
        box4.style.color = "darkred";
        box7.style.color = "darkred";
        res.innerHTML = box1.innerHTML+" is the WINNER!"
    }
    else if(box4.innerHTML == box5.innerHTML && box5.innerHTML == box6.innerHTML ){
        box4.style.color = "darkred";
        box5.style.color = "darkred";
        box6.style.color = "darkred";
        res.innerHTML = box5.innerHTML+" is the WINNER!"
    }
    else if(
        box1.innerHTML!= " " && 
        box2.innerHTML!= " " && 
        box3.innerHTML!= " " && 
        box4.innerHTML!= " " && 
        box5.innerHTML!= " " && 
        box6.innerHTML!= " " && 
        box7.innerHTML!= " " && 
        box8.innerHTML!= " " && 
        box9.innerHTML!= " "
    ){
        res.innerHTML = "Match DRAW!"
    };
    if(result.innerHTML != ""){
        result.style.display = "block";
    };
}); 

//Code for box5
box5.addEventListener("click", function(){ 
    if(n%2 == 0){
        t = "O";
    }
    else if(n%2 != 0){
        t = "X";
    };
    n = n+1;
    if(t=="O" && box5.innerHTML == " "){
        turn.innerHTML = "Next move for X";
    }
    else if(t=="X" && box5.innerHTML == " "){
        turn.innerHTML = "Next move for O";
    };
    if( box5.innerHTML == " "){
        box5.innerHTML = t;
    };
    if(box1.innerHTML == box5.innerHTML && box1.innerHTML == box9.innerHTML ){
        box1.style.color = "darkred";
        box5.style.color = "darkred";
        box9.style.color = "darkred";
        res.innerHTML = box1.innerHTML+" is the WINNER!"
    }
    else if(box4.innerHTML == box5.innerHTML && box5.innerHTML == box6.innerHTML ){
        box4.style.color = "darkred";
        box5.style.color = "darkred";
        box6.style.color = "darkred";
        res.innerHTML = box5.innerHTML+" is the WINNER!"
    }
    else if(box2.innerHTML == box5.innerHTML && box5.innerHTML == box8.innerHTML ){
       box2.style.color = "darkred";
       box5.style.color = "darkred";
       box8.style.color = "darkred";
       res.innerHTML = box5.innerHTML+" is the WINNER!"
    }
    else if(box3.innerHTML == box5.innerHTML && box3.innerHTML == box7.innerHTML ){
       box3.style.color = "darkred";
       box5.style.color = "darkred";
       box7.style.color = "darkred";
       res.innerHTML = box3.innerHTML+" is the WINNER!"
    }
    else if(
        box1.innerHTML!= " " && 
        box2.innerHTML!= " " && 
        box3.innerHTML!= " " && 
        box4.innerHTML!= " " && 
        box5.innerHTML!= " " && 
        box6.innerHTML!= " " && 
        box7.innerHTML!= " " && 
        box8.innerHTML!= " " && 
        box9.innerHTML!= " "
    ){
        res.innerHTML = "Match DRAW!"
    };
    if(result.innerHTML != ""){
        result.style.display = "block";
    };
});

//Code for box6
box6.addEventListener("click", function(){ 
    if(n%2 == 0){
        t = "O";
    }
    else if(n%2 != 0){
        t = "X";
    };
    n = n+1;
    if(t=="O" && box6.innerHTML == " "){
        turn.innerHTML = "Next move for X";
    }
    else if(t=="X" && box6.innerHTML == " "){
        turn.innerHTML = "Next move for O";
    };
    if( box6.innerHTML == " "){
        box6.innerHTML = t;
    };
    if(box3.innerHTML == box6.innerHTML && box6.innerHTML == box9.innerHTML ){
        box3.style.color = "darkred";
        box6.style.color = "darkred";
        box9.style.color = "darkred";
        res.innerHTML = box6.innerHTML+" is the WINNER!"
    }
    else if(box4.innerHTML == box5.innerHTML && box5.innerHTML == box6.innerHTML ){
        box4.style.color = "darkred";
        box5.style.color = "darkred";
        box6.style.color = "darkred";
        res.innerHTML = box5.innerHTML+" is the WINNER!"
    }
    else if(
       box1.innerHTML!= " " && 
       box2.innerHTML!= " " && 
       box3.innerHTML!= " " && 
       box4.innerHTML!= " " && 
       box5.innerHTML!= " " && 
       box6.innerHTML!= " " && 
       box7.innerHTML!= " " && 
       box8.innerHTML!= " " && 
       box9.innerHTML!= " "
    ){
       res.innerHTML = "Match DRAW!"
    };
    if(result.innerHTML != ""){
        result.style.display = "block";
    };
});

//Code for box7
box7.addEventListener("click", function(){ 
    if(n%2 == 0){
        t = "O";
    }
    else if(n%2 != 0){
        t = "X";
    };
    n = n+1;
    if(t=="O" && box7.innerHTML == " "){
        turn.innerHTML = "Next move for X";
    }
    else if(t=="X" && box7.innerHTML == " "){
        turn.innerHTML = "Next move for O";
    };
    if( box7.innerHTML == " "){
        box7.innerHTML = t;
    };
    if(box7.innerHTML == box8.innerHTML && box8.innerHTML == box9.innerHTML ){
        box7.style.color = "darkred";
        box8.style.color = "darkred";
        box9.style.color = "darkred";
        res.innerHTML = box7.innerHTML+" is the WINNER!"
    }
    else if(box1.innerHTML == box4.innerHTML && box1.innerHTML == box7.innerHTML ){
        box1.style.color = "darkred";
        box4.style.color = "darkred";
        box7.style.color = "darkred";
        res.innerHTML = box1.innerHTML+" is the WINNER!"
    }
    else if(box7.innerHTML == box5.innerHTML && box5.innerHTML == box3.innerHTML ){
        box7.style.color = "darkred";
        box5.style.color = "darkred";
        box3.style.color = "darkred";
        res.innerHTML = box5.innerHTML+" is the WINNER!"
    }
    else if(
        box1.innerHTML!= " " && 
        box2.innerHTML!= " " && 
        box3.innerHTML!= " " && 
        box4.innerHTML!= " " && 
        box5.innerHTML!= " " && 
        box6.innerHTML!= " " && 
        box7.innerHTML!= " " && 
        box8.innerHTML!= " " && 
        box9.innerHTML!= " "
    ){
        res.innerHTML = "Match DRAW!"
    };
    if(result.innerHTML != ""){
        result.style.display = "block";
    };
}); 

//Code for box8
box8.addEventListener("click", function(){ 
    if(n%2 == 0){
        t = "O";
    }
    else if(n%2 != 0){
        t = "X";
    };
    n = n+1;
    if(t=="O" && box8.innerHTML == " "){
        turn.innerHTML = "Next move for X";
    }
    else if(t=="X" && box8.innerHTML == " "){
        turn.innerHTML = "Next move for O";
    };
    if( box8.innerHTML == " "){
        box8.innerHTML = t;
    };
    if(box7.innerHTML == box8.innerHTML && box8.innerHTML == box9.innerHTML ){
        box7.style.color = "darkred";
        box8.style.color = "darkred";
        box9.style.color = "darkred";
        res.innerHTML = box7.innerHTML+" is the WINNER!"
    }
    else if(box2.innerHTML == box5.innerHTML && box5.innerHTML == box8.innerHTML ){
        box2.style.color = "darkred";
        box5.style.color = "darkred";
        box8.style.color = "darkred";
        res.innerHTML = box5.innerHTML+" is the WINNER!"
    }
    else if(
       box1.innerHTML!= " " && 
       box2.innerHTML!= " " && 
       box3.innerHTML!= " " && 
       box4.innerHTML!= " " && 
       box5.innerHTML!= " " && 
       box6.innerHTML!= " " && 
       box7.innerHTML!= " " && 
       box8.innerHTML!= " " && 
       box9.innerHTML!= " "
    ){
       res.innerHTML = "Match DRAW!"
    };
    if(result.innerHTML != ""){
        result.style.display = "block";
    };
}); 

//Code for box9
box9.addEventListener("click", function(){ 
    if(n%2 == 0){
        t = "O";
    }
    else if(n%2 != 0){
        t = "X";
    };
    n = n+1;
    if(t=="O" && box9.innerHTML == " "){
        turn.innerHTML = "Next move for X";
    }
    else if(t=="X" && box9.innerHTML == " "){
        turn.innerHTML = "Next move for O";
    };
    if( box9.innerHTML == " "){
        box9.innerHTML = t;
    };
    if(box7.innerHTML == box8.innerHTML && box8.innerHTML == box9.innerHTML ){
        box7.style.color = "darkred";
        box8.style.color = "darkred";
        box9.style.color = "darkred";
        res.innerHTML = box7.innerHTML+" is the WINNER!"
    }
    else if(box3.innerHTML == box6.innerHTML && box6.innerHTML == box9.innerHTML ){
        box3.style.color = "darkred";
        box6.style.color = "darkred";
        box9.style.color = "darkred";
        res.innerHTML = box9.innerHTML+" is the WINNER!"
    }
    else if(box9.innerHTML == box5.innerHTML && box5.innerHTML == box1.innerHTML ){
        box9.style.color = "darkred";
        box5.style.color = "darkred";
        box1.style.color = "darkred";
        res.innerHTML = box5.innerHTML+" is the WINNER!"
    }
    else if(
        box1.innerHTML!= " " && 
        box2.innerHTML!= " " && 
        box3.innerHTML!= " " && 
        box4.innerHTML!= " " && 
        box5.innerHTML!= " " && 
        box6.innerHTML!= " " && 
        box7.innerHTML!= " " && 
        box8.innerHTML!= " " && 
        box9.innerHTML!= " "
    ){
        res.innerHTML = "Match DRAW!"
    };
    if(result.innerHTML != ""){
        result.style.display = "block";
    };
}); 

//Code for reset
reset.addEventListener("click", function(){
    n = n+1;
    box1.innerHTML= " "; 
    box2.innerHTML= " "; 
    box3.innerHTML= " "; 
    box4.innerHTML= " "; 
    box5.innerHTML= " "; 
    box6.innerHTML= " "; 
    box7.innerHTML= " "; 
    box8.innerHTML= " "; 
    box9.innerHTML= " ";
    box1.style.color = "black";
    box2.style.color = "black";
    box3.style.color = "black";
    box4.style.color = "black";
    box5.style.color = "black";
    box6.style.color = "black";
    box7.style.color = "black";
    box8.style.color = "black";
    box9.style.color = "black";
    if(n%2 == 0){
        turn.innerHTML = "Next move for O";
    }
    else if(n%2 != 0){
        turn.innerHTML = "Next move for X";
    };
    result.innerHTML = "";
    result.style.display = "none";
});

