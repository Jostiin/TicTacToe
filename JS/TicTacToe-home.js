
import { data_game } from "./TicTacToe-config.js";



/*BTNS HOME*/
var btn_player_x = document.getElementById('player_x');
var btn_player_o = document.getElementById('player_o');

var btn_newGamePL = document.getElementById('new-gamePL');

var btn_refresh = document.getElementById('refresh');

/* BTNS EVENTS*/

btn_player_x.addEventListener('click',() => {
    if(getComputedStyle(btn_player_x).backgroundColor!="rgb(179, 190, 196)"){
        btn_player_x.style.backgroundColor = '#b3bec4';
        btn_player_x.style.color = '#1A2B33';

        btn_player_o.style.backgroundColor = 'transparent';
        btn_player_o.style.color = '#b3bec4';

        data_game.player1 = 'x';
        data_game.player2 = 'o';
        
    }
    
})
btn_player_o.addEventListener('click',() => {
    if(getComputedStyle(btn_player_o).backgroundColor!="rgb(179, 190, 196)"){
        btn_player_o.style.backgroundColor = '#b3bec4';
        btn_player_o.style.color = '#1A2B33';

        btn_player_x.style.backgroundColor = 'transparent';
        btn_player_x.style.color = '#b3bec4';

        data_game.player1 = 'o';
        data_game.player2 = 'x';
        
    }
})



/*PLAY GAME*/
btn_newGamePL.addEventListener('click',() => {
    return window.location.href = "TicTacToe.html";
})