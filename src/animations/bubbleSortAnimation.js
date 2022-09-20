export function animate_bubbleSort(bubbleSort, time) {
  for (let i = 0; i < bubbleSort.length; i++) {
    if (bubbleSort[i].length === 2) {
      setTimeout(() => {
        document.getElementById(
          `index-${bubbleSort[i][0]}`
        ).style.backgroundColor = "#6CDB7B";
        document.getElementById(
          `index-${bubbleSort[i][1]}`
        ).style.backgroundColor = "#6CDB7B";
      }, i * time);
      setTimeout(() => {
        document.getElementById(
          `index-${bubbleSort[i][0]}`
        ).style.backgroundColor = "#6399f1";
        document.getElementById(
          `index-${bubbleSort[i][1]}`
        ).style.backgroundColor = "#6399f1";
      }, i * time + (time - 20));
    } else if (bubbleSort[i].length === 4) {
      setTimeout(() => {
        document.getElementById(
          `index-${bubbleSort[i][1]}`
        ).style.backgroundColor = "#DD5C5C";
        document.getElementById(
          `index-${bubbleSort[i][3]}`
        ).style.backgroundColor = "#DD5C5C";
        document.getElementById(`index-${bubbleSort[i][1]}`).style.height =
          window.innerWidth < 450
            ? `${Math.floor(bubbleSort[i][2]) * 3}px`
            : window.innerWidth < 600
            ? `${Math.floor(bubbleSort[i][2]) * 4}px`
            : `${Math.floor(bubbleSort[i][2]) * 5}px`;
        document.getElementById(`index-${bubbleSort[i][3]}`).style.height =
          window.innerWidth < 450
            ? `${Math.floor(bubbleSort[i][0]) * 3}px`
            : window.innerWidth < 600
            ? `${Math.floor(bubbleSort[i][0]) * 4}px`
            : `${Math.floor(bubbleSort[i][0]) * 5}px`;
      }, i * time);
      setTimeout(() => {
        document.getElementById(
          `index-${bubbleSort[i][1]}`
        ).style.backgroundColor = "#6399f1";
        document.getElementById(
          `index-${bubbleSort[i][3]}`
        ).style.backgroundColor = "#6399f1";
      }, i * time + (time - 20));
    } else {
      setTimeout(() => {
        document.getElementById(
          `index-${bubbleSort[i][0]}`
        ).style.backgroundColor = "#B578E8";
      }, i * time);
    }
  }
}
