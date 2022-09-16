'use strict';

let boxes = document.querySelectorAll('.box-area');
let players = document.getElementById('players');
let detail = document.getElementById('detail');
let winMoment = document.getElementById('winMoment');
let music = document.getElementById('music');
let tap = document.getElementById('tap');
let gameover = document.getElementById('gameover');
let winGame = document.getElementById('winGame');
let resetGame = document.getElementById('resetGame');
let stage = document.getElementById('stage');
let x = 1;
let allBoxes = [];
let line = document.getElementById('line');
let turn = 'X';
let isWin = false;

music.play();

function changeTurn() {
    return turn === 'X' ? '0' : 'X';
};

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (box.innerText === '' && !isWin) {
            box.innerText = turn;
            turn = changeTurn();
            players.innerText = turn;
            checkWin();
            tap.play();
            setTimeout(() => {
               tap.pause();
               tap.currentTime = 0; 
            }, 500);
        }
    });
});

function checkWin() {
    let checkers = [
        [0, 1, 2, 0, 0, 0],
        [3, 4, 5, 0, 6.5, 0],
        [6, 7, 8, 0, 12.7, 0],
        [0, 3, 6, -6.3, 6.4, 90],
        [1, 4, 7, 0, 6.4, 90],
        [2, 5, 8, 6.3, 6.4, 90],
        [0, 4, 8, 0.5, 7, 45],
        [2, 4, 6, 0.5, 6, -45]
    ];
    checkers.forEach((check) => {
        if (boxes[check[0]].innerText === boxes[check[1]].innerText && boxes[check[0]].innerText === boxes[check[2]].innerText && boxes[check[0]].innerText != '') {
            line.style.display = 'block';
            line.style.transform = `translate(${check[3]}vw,${check[4]}vw) rotate(${check[5]}deg)`;
            line.style.width = 18.5 + 'vw';
            isWin = true;
            players.innerText = boxes[check[0]].innerText;
            stage.innerText = 'won';
            winMoment.style.width = 9 + 'vw';
            music.pause();
            music.currentTime = 0;
            setTimeout(() => {
                winGame.play();
            }, 400);
        } 
    });
};


resetGame.addEventListener('click', ()=>{
    boxes.forEach( (box)=>{
        box.innerText = '';
        // line.style.display = 'none';
        line.style.width = '0';
        winMoment.style.width = '0';
        turn = 'X';
        players.innerText = turn;
        stage.innerText = 'turn';
        isWin = false;
        music.currentTime = 0;
        music.play();
    })
})









