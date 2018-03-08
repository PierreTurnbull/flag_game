/**********/
/* SCRIPT */
/**********/

start.addEventListener("click", function() {
  close_room_menu();
  load_room_play();
});

restart.addEventListener("click", function() {
  close_room_gameover();
  load_room_play();
});

for (let i = 0; i < 4; i++) {
  flag_list_dom[i].addEventListener("mousedown", function() {
    if (this.dataset.id == correct_answer) {
      console.log("yes!");
      load_flags();
      score.textContent = Number(score.textContent) + 1;
      add_time(time_bonus);
    } else if (!flag_list_dom[i].classList.contains("is-active")) {
      disable_choice(i);
      lose_life();
    }
  });
}
