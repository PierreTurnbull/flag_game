/*************/
/* CONSTANTS */
/*************/

const room_menu_id      = 0;
const room_play_id      = 1;
const room_gameover_id  = 2;

const time_limit        = 2;

/*************/
/* VARIABLES */
/*************/

var room = 0;

// ROOMS

var room_menu     = document.querySelector("#game-start");
var room_play     = document.querySelector("#game");
var room_gameover = document.querySelector("#game-over");

// ROOM MENU

var start       = document.querySelector(".start");

// ROOM PLAY

var time        = document.querySelector(".time span");
var time_id     = null;

// ROOM GAMEOVER

var restart     = document.querySelector(".restart");

/*************/
/* FUNCTIONS */
/*************/

function update_time() {
  var current_time = Number(time.textContent);
  if (current_time == 0) {
    close_room_play();
    enter_room_gameover();
    current_time = 20;
  } else {
    current_time -= 1;
  }
  time.textContent = current_time;
}

// ENTER ROOM

function enter_room_gameover() {
  room_gameover.style.display = "flex";
}

function enter_room_play() {
  time_id = setInterval(function() {
    update_time();
  }, 1000);
}

// CLOSE ROOM

function close_room_menu() {
  room_menu.style.display = "none";
}

function close_room_play() {
  clearInterval(time_id);
}

function close_room_gameover() {
  room_gameover.style.display = "none";
}

/**********/
/* SCRIPT */
/**********/

start.addEventListener("click", function() {
  close_room_menu();
  enter_room_play();
});

restart.addEventListener("click", function() {
  close_room_gameover();
  enter_room_play();
});





// TODO: delete this
close_room_menu();
enter_room_play();
