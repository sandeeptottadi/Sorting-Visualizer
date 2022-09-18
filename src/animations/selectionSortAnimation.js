export function selectionSortAnimation(animations, time) {
  let prev = null;
  for (let i = 0; i < animations.length; i++) {
    if (animations[i].length === 2) {
      setTimeout(() => {
        document.getElementById(
          `index-${animations[i][0]}`
        ).style.backgroundColor = "green";
        document.getElementById(
          `index-${animations[i][1]}`
        ).style.backgroundColor = "green";
      }, i * time);
      setTimeout(() => {
        document.getElementById(
          `index-${animations[i][0]}`
        ).style.backgroundColor = "#6399F1";
        document.getElementById(
          `index-${animations[i][1]}`
        ).style.backgroundColor = "#6399F1";
      }, i * time + time);
    } else {
      setTimeout(() => {
        document.getElementById(
          `index-${animations[i][0]}`
        ).style.backgroundColor = "red";
        document.getElementById(
          `index-${animations[i][2]}`
        ).style.backgroundColor = "red";
        document.getElementById(`index-${animations[i][0]}`).style.height =
          window.innerWidth < 450
            ? `${Math.floor(animations[i][1]) * 3}px`
            : window.innerWidth < 600
            ? `${Math.floor(animations[i][1]) * 4}px`
            : `${Math.floor(animations[i][1]) * 5}px`;
        document.getElementById(`index-${animations[i][2]}`).style.height =
          window.innerWidth < 450
            ? `${Math.floor(animations[i][3]) * 3}px`
            : window.innerWidth < 600
            ? `${Math.floor(animations[i][3]) * 4}px`
            : `${Math.floor(animations[i][3]) * 5}px`;
      }, i * time);
      setTimeout(() => {
        document.getElementById(
          `index-${animations[i][0]}`
        ).style.backgroundColor = "#6399F1";
        document.getElementById(
          `index-${animations[i][2]}`
        ).style.backgroundColor = "#6399F1";
      }, i * time + time);
    }
  }
}
