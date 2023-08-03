import { data_game } from "./TicTacToe-config.js";

var btn_refresh = document.getElementById('refresh');

var btn_1= document.getElementById('btn1');
var btn_2= document.getElementById('btn2');
var btn_3= document.getElementById('btn3');
var btn_4= document.getElementById('btn4');
var btn_5= document.getElementById('btn5');
var btn_6= document.getElementById('btn6');
var btn_7= document.getElementById('btn7');
var btn_8= document.getElementById('btn8');
var btn_9= document.getElementById('btn9');

var btn_quit = document.getElementById('btn_quit')
var btn_next = document.getElementById('btn_next')

var moviments = 0;
var secuencix = {
    'btn1':false,
    'btn2':false,
    'btn3':false,
    'btn4':false,
    'btn5':false,
    'btn6':false,
    'btn7':false,
    'btn8':false,
    'btn9':false
    };
var secuencio = {
    'btn1':false,
    'btn2':false,
    'btn3':false,
    'btn4':false,
    'btn5':false,
    'btn6':false,
    'btn7':false,
    'btn8':false,
    'btn9':false
    };

function reset(){
    /*TEXT BTN*/
    btn_1.innerHTML = "";
    btn_2.innerHTML = "";
    btn_3.innerHTML = "";
    btn_4.innerHTML = "";
    btn_5.innerHTML = "";
    btn_6.innerHTML = "";
    btn_7.innerHTML = "";
    btn_8.innerHTML = "";
    btn_9.innerHTML = "";
    /*DISNABLED BTN*/
    
    btn_1.removeAttribute('disabled');
    btn_2.removeAttribute('disabled');
    btn_3.removeAttribute('disabled');
    btn_4.removeAttribute('disabled');
    btn_5.removeAttribute('disabled');
    btn_6.removeAttribute('disabled');
    btn_7.removeAttribute('disabled');
    btn_8.removeAttribute('disabled');
    btn_9.removeAttribute('disabled');

    /* SECUENCI*/
    secuencix.btn1 = false;
    secuencix.btn2 = false;
    secuencix.btn3 = false;
    secuencix.btn4 = false;
    secuencix.btn5 = false;
    secuencix.btn6 = false;
    secuencix.btn7 = false;
    secuencix.btn8 = false;
    secuencix.btn9 = false;
    
    secuencio.btn1 = false;
    secuencio.btn2 = false;
    secuencio.btn3 = false;
    secuencio.btn4 = false;
    secuencio.btn5 = false;
    secuencio.btn6 = false;
    secuencio.btn7 = false;
    secuencio.btn8 = false;
    secuencio.btn9 = false;
    /*MOVIMENTS*/
    moviments = 0;
}

function win_modal(){
    var modal = document.getElementById('modalwin');
    modal.removeAttribute('style')
}

function win(){
    if(secuencix.btn1 == true && secuencix.btn2 == true && secuencix.btn3 == true ||
        secuencix.btn4 == true && secuencix.btn5 == true && secuencix.btn6 == true ||
        secuencix.btn7 == true && secuencix.btn8 == true && secuencix.btn9 == true ||
        secuencix.btn1 == true && secuencix.btn4 == true && secuencix.btn7 == true ||
        secuencix.btn2 == true && secuencix.btn5 == true && secuencix.btn8 == true ||
        secuencix.btn3 == true && secuencix.btn6 == true && secuencix.btn9 == true ||

        secuencix.btn1 == true && secuencix.btn5 == true && secuencix.btn9 == true ||
        secuencix.btn3 == true && secuencix.btn5 == true && secuencix.btn7 == true ){
            data_game.player1 = data_game.player1+1
            document.getElementById('player1points').innerText = data_game.player1
            document.getElementById('wiplayer').innerText = "x"
            win_modal()
           
        
    }else if(secuencio.btn1 == true && secuencio.btn2 == true && secuencio.btn3 == true ||
        secuencio.btn4 == true && secuencio.btn5 == true && secuencio.btn6 == true ||
        secuencio.btn7 == true && secuencio.btn8 == true && secuencio.btn9 == true ||
        secuencio.btn1 == true && secuencio.btn4 == true && secuencio.btn7 == true ||
        secuencio.btn2 == true && secuencio.btn5 == true && secuencio.btn8 == true ||
        secuencio.btn3 == true && secuencio.btn6 == true && secuencio.btn9 == true ||
        secuencix.btn1 == true && secuencix.btn5 == true && secuencix.btn9 == true ||
        secuencix.btn3 == true && secuencix.btn5 == true && secuencix.btn7 == true){
            data_game.player2 = data_game.player2+1
            document.getElementById('player2points').innerText = data_game.player2
            document.getElementById('wiplayer').innerText = "o"
            win_modal()
    }
    else{
        moviments += 1;
        if(moviments == 9){
            data_game.tie = data_game.tie+1
            document.getElementById('tie_points').innerText = data_game.tie
            win_modal()
        }
    }
    
    
}

/*BTN REFRESH*/
btn_refresh.addEventListener('click',() => {
    return window.location.href = "TicTacToe-home.html";
})
/*BTN GAME*/
btn_1.addEventListener('click',() => {
 
    if(data_game.turn == 'x'){
        btn_1.innerHTML = "<h1 class='signo-x'>X</h1>";
        data_game.turn = 'o'
        secuencix.btn1 = true
        document.getElementById('turn_player').innerText=data_game.turn
    }else{
        btn_1.innerHTML = "<h1 class='signo-o'>O</h1>";
        data_game.turn = 'x'
        secuencio.btn1 = true
        document.getElementById('turn_player').innerText=data_game.turn
        
    }
    btn_1.setAttribute('disabled', "true");
    
    win()
})
btn_2.addEventListener('click',() => {
    
    if(data_game.turn == 'x'){
        btn_2.innerHTML = "<h1 class='signo-x'>X</h1>";
        data_game.turn = 'o'
        document.getElementById('turn_player').innerText=data_game.turn
        secuencix.btn2 = true
    }else{
        btn_2.innerHTML = "<h1 class='signo-o'>O</h1>";
        data_game.turn = 'x'
        document.getElementById('turn_player').innerText=data_game.turn
        secuencio.btn2 = true
    }
    btn_2.setAttribute('disabled', "true");
    win()
})
btn_3.addEventListener('click',() => {
  
    if(data_game.turn == 'x'){
        btn_3.innerHTML = "<h1 class='signo-x'>X</h1>";
        data_game.turn = 'o'
        document.getElementById('turn_player').innerText=data_game.turn
        secuencix.btn3 = true
    }else{
        btn_3.innerHTML = "<h1 class='signo-o'>O</h1>";
        data_game.turn = 'x'
        document.getElementById('turn_player').innerText=data_game.turn
        secuencio.btn3 = true
    }
    btn_3.setAttribute('disabled', "true");
    win()
})
btn_4.addEventListener('click',() => {
    
    if(data_game.turn == 'x'){
        btn_4.innerHTML = "<h1 class='signo-x'>X</h1>";
        data_game.turn = 'o'
        document.getElementById('turn_player').innerText=data_game.turn
        secuencix.btn4 = true
    }else{
        btn_4.innerHTML = "<h1 class='signo-o'>O</h1>";
        data_game.turn = 'x'
        document.getElementById('turn_player').innerText=data_game.turn
        secuencio.btn4 = true
    }
    btn_4.setAttribute('disabled', "true");
    win()
})
btn_5.addEventListener('click',() => {
    
    if(data_game.turn == 'x'){
        btn_5.innerHTML = "<h1 class='signo-x'>X</h1>";
        data_game.turn = 'o'
        document.getElementById('turn_player').innerText=data_game.turn
        secuencix.btn5 = true
    }else{
        btn_5.innerHTML = "<h1 class='signo-o'>O</h1>";
        data_game.turn = 'x'
        document.getElementById('turn_player').innerText=data_game.turn
        secuencio.btn5 = true
    }
    btn_5.setAttribute('disabled', "true");
    win()
})
btn_6.addEventListener('click',() => {
    
    if(data_game.turn == 'x'){
        btn_6.innerHTML = "<h1 class='signo-x'>X</h1>";
        data_game.turn = 'o'
        document.getElementById('turn_player').innerText=data_game.turn
        secuencix.btn6 = true
    }else{
        btn_6.innerHTML = "<h1 class='signo-o'>O</h1>";
        data_game.turn = 'x'
        document.getElementById('turn_player').innerText=data_game.turn
        secuencio.btn6 = true
    }
    btn_6.setAttribute('disabled', "true");
    win()
})
btn_7.addEventListener('click',() => {
   
    if(data_game.turn == 'x'){
        btn_7.innerHTML = "<h1 class='signo-x'>X</h1>";
        data_game.turn = 'o'
        document.getElementById('turn_player').innerText=data_game.turn
        secuencix.btn7 = true
    }else{
        btn_7.innerHTML = "<h1 class='signo-o'>O</h1>";
        data_game.turn = 'x'
        document.getElementById('turn_player').innerText=data_game.turn
        secuencio.btn7 = true
    }
    btn_7.setAttribute('disabled', "true");
    win()
})
btn_8.addEventListener('click',() => {

    if(data_game.turn == 'x'){
        btn_8.innerHTML = "<h1 class='signo-x'>X</h1>";
        data_game.turn = 'o'
        document.getElementById('turn_player').innerText=data_game.turn
        secuencix.btn8 = true
    }else{
        btn_8.innerHTML = "<h1 class='signo-o'>O</h1>";
        data_game.turn = 'x'
        document.getElementById('turn_player').innerText=data_game.turn
        secuencio.btn8 = true
    }
    btn_8.setAttribute('disabled', "true");
    win()
})
btn_9.addEventListener('click',() => {
    
    if(data_game.turn == 'x'){
        btn_9.innerHTML = "<h1 class='signo-x'>X</h1>";
        data_game.turn = 'o'
        document.getElementById('turn_player').innerText=data_game.turn
        secuencix.btn9 = true
    }else{
        btn_9.innerHTML = "<h1 class='signo-o'>O</h1>";
        data_game.turn = 'x'
        document.getElementById('turn_player').innerText=data_game.turn
        secuencio.btn9 = true
    }
    btn_9.setAttribute('disabled', "true");
    win()
})

btn_quit.addEventListener('click',() => {
    return window.location.href = "TicTacToe-home.html";
})
btn_next.addEventListener('click',() => {
    document.getElementById('modalwin').setAttribute('style', "display: none");
    reset()
})