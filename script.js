console.log("Welcome to tic tac toe");
let audioTurn=new Audio("ting.mp3");
let move="X";
let gameover=false;
const changeTurn = ()=>{
    return move==="X"?"0":"X";
}
const checkWin = ()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],[3,4,5,],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerHTML===boxtext[e[1]].innerHTML) && (boxtext[e[2]].innerHTML===boxtext[e[1]].innerHTML) && (boxtext[e[0]].innerHTML!==""))
        {
            document.querySelector('.info').innerHTML=boxtext[e[0]].innerHTML+" Won";
            gameover=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
        }
    })
}
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerHTML==='')
        {
            boxtext.innerHTML=move;
            move=changeTurn();
            audioTurn.play();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerHTML = "Turn for "+ move;}
        }
    })
})
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerHTML=""
    });
    move="X";
    gameover=false;
    document.getElementsByClassName("info")[0].innerHTML = "Turn for "+ move;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
})