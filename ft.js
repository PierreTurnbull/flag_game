/*************/
/* FUNCTIONS */
/*************/

function update_timer() {
  var current_time = Number(time.textContent);
  if (current_time == 0) {
    close_room_play();
    load_room_gameover();
    current_time = time_limit;
  } else {
    current_time -= 1;
  }
  time.textContent = current_time;
}

function add_time() {
  var current_time = Number(time.textContent);
  if (current_time >= time_max - time_bonus) {
    current_time = time_max;
  } else {
    current_time += time_bonus;
  }
  time.textContent = current_time;
}

function lose_life() {
  lives--;
  lives_dom[lives].style.display = "none";
  if (lives == 0) {
    close_room_play();
    load_room_gameover();
  }
}

function disable_choice(i) {
  flag_list_dom[i].classList.add("is-active");
}

function enable_choices() {
  for (var i = 0; i < 4; i++) {
    flag_list_dom[i].classList.remove("is-active");
  }
}

// LOAD ROOM MODULES

function load_timer() {
  time.textContent = time_limit;
  time_id = setInterval(function() {
    update_timer();
  }, 1000);
}

function fill_flag_list() {
  for (var i = 0; i < 4; i++) {
    do {
      new_index = Math.floor(Math.random() * flags.length);
      new_flag = flags[new_index];
    } while (flag_list.indexOf(new_flag) !== -1);
    flag_list[i] = new_flag;
  }
}

function fill_dom() {
  correct_answer = Math.floor(Math.random() * flag_list.length);
  flag_name_dom.textContent = flag_list[correct_answer].name;
  for (var i = 0; i < 4; i++) {
    flag_list_dom[i].attributes[0].value = "flags/" + flag_list[i].code + ".svg";
  }
}

function load_flags() {
  fill_flag_list();
  fill_dom();
  enable_choices();
}

function load_lives() {
  for (let i = 0; i < 3; i++) {
    lives_dom[i].style.display = "block";
  }
  lives = 3;
}

// LOAD ROOMS

function load_room_gameover() {
  room_gameover.style.display = "flex";
}

function load_room_play() {
  load_timer();
  load_flags();
  load_lives();
}

// CLOSE ROOM

function close_room_menu() {
  room_menu.style.display = "none";
}

function close_room_play() {
  clearInterval(time_id);
  score.textContent = 0;
}

function close_room_gameover() {
  room_gameover.style.display = "none";
}
