let turn = 'X';
let computer,user;

const xValue = document.getElementById('xcount');
const oValue = document.getElementById('ocount');
const container = document.querySelector('.container');
const gameSelector = document.querySelector('.game');
let title = document.querySelector('.title');
let square = [];



function loadSquare(){
    for(let i=1;i<10;i++){
        square[i] = document.getElementById('item'+i).innerHTML;
    }
}

function isCompelete(){
    for(let i=1;i<10;i++){
        if(document.getElementById('item'+i).innerHTML==='')
            return false;
    }
    return true;
}

function clickSquare(){

    let isTrue = true;
    while(isTrue){
        const element = document.getElementById('item'+computerTurn());
        
        if(element && element.innerHTML===''){
            game(element.id);
            isTrue=false;
        }
    }
}

function computerTurn(){

    let num = Math.floor((Math.random() * 9) + 1);
    
   return num;
}


function endGame(n1,n2,n3){
    title.innerHTML =  `${square[n1]} winner The Game`;
    document.getElementById('item'+n1).style.background='#fa0';
    document.getElementById('item'+n2).style.background='#fa0';
    document.getElementById('item'+n3).style.background='#fa0';

    increaseTheWinner(square[n1]);
    console.log(localStorage);
   
    showScore();
    setInterval(function(){title.innerHTML +='.'},200);
    setTimeout(function(){location.reload()},600);
}

function endGame2(){
    title.innerHTML = 'No winner';
    setInterval(function(){title.innerHTML +='.'},200);
    setTimeout(function(){location.reload()},600);
}

function game(id){
    
    let ele = document.getElementById(id);

    if(turn == computer && ele.innerHTML===''){
        ele.innerHTML = turn;
        turn = user;
        title.innerHTML = user;
        winner();
    }else if(turn ==user && ele.innerHTML===''){
        ele.innerHTML = turn;
        turn = computer;
        title.innerHTML = computer; 
        winner();
        if(!isCompelete())
            setTimeout(clickSquare,800);
        else
            endGame2();
    }

    
}

//
function increaseTheWinner(winner){
    if(winner==computer)
    {
        localStorage.xCount = parseInt(localStorage.xCount) + 1;
    }else{
        localStorage.oCount = parseInt(localStorage.oCount) + 1;
    }
    
}

function showScore(){
    xValue.innerHTML = localStorage.xCount;
    oValue.innerHTML = localStorage.oCount;
}

function setScoreZero(){
    localStorage.xCount = 0;
    localStorage.oCount = 0;
    showScore();
}
//

function winner(){
    loadSquare();
    

    if(square[1]== square[2] && square[2]==square[3] && square[3]!=''){
        endGame(1,2,3);
        return true;
    }else if(square[4]== square[5] && square[5]==square[6] && square[6]!=''){
        endGame(4,5,6);
        return true;

    }else if(square[7]== square[8] && square[8]==square[9] && square[9]!=''){
        endGame(7,8,9);
        return true;

    }else if(square[1]== square[4] && square[4]==square[7] && square[7]!=''){
        endGame(1,4,7);
        return true;

    }else if(square[2]== square[5] && square[5]==square[8] && square[8]!=''){
        endGame(2,5,8);
        return true;
        
    }else if(square[3]== square[6] && square[6]==square[9] && square[9]!=''){
        endGame(3,6,9);

        return true;

    }else if(square[1]== square[5] && square[5]==square[9] && square[9]!=''){
        endGame(1,5,9);
        return true;


    }else if(square[3]== square[5] && square[5]==square[7] && square[7]!=''){
        endGame(3,5,7);
        return true;
        
    }else if(isCompelete()){
        endGame2();
        return false;

    }
    return false;
}




function chooseXOrO(id){
    container.classList.toggle('hide');
    gameSelector.classList.toggle('hide');

    user = id.toUpperCase();
    turn = user;
    if(user==='O')
        computer='X';
    else
        computer='O';

    title.innerHTML=user;

    showScore();
}


