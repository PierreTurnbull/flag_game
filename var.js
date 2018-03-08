/*************/
/* VARIABLES */
/*************/

// ROOMS

var room_menu       = document.querySelector("#game-start");
var room_play       = document.querySelector("#game");
var room_gameover   = document.querySelector("#game-over");

// ROOM MENU

var start           = document.querySelector(".start");

// ROOM PLAY

var time            = document.querySelector(".time span");
var time_id         = null;

var score           = document.querySelector(".score strong");

var lives           = 3;
var lives_dom       = document.querySelectorAll(".lives img");

var new_flag        = null;
var flag_list       = [];
var flag_name_dom   = document.querySelector(".flag_name");
var flag_list_dom   = document.querySelectorAll(".flag img");
var correct_answer  = 0;

// ROOM GAMEOVER

var restart         = document.querySelector(".restart");
