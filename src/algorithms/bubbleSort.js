export function animate_bubbleSort(array, time) {
  let [mergesort] = mergeSort(array);
  for (let i = 0; i < mergesort.length; i++) {
    if (mergesort[i].length === 2) {
      setTimeout(() => {
        document.getElementById(
          `index-${mergesort[i][0]}`
        ).style.backgroundColor = "#6CDB7B";
        document.getElementById(
          `index-${mergesort[i][1]}`
        ).style.backgroundColor = "#6CDB7B";
      }, i * time);
      setTimeout(() => {
        document.getElementById(
          `index-${mergesort[i][0]}`
        ).style.backgroundColor = "#6399f1";
        document.getElementById(
          `index-${mergesort[i][1]}`
        ).style.backgroundColor = "#6399f1";
      }, i * time + (time - 20));
    } else if (mergesort[i].length === 4) {
      setTimeout(() => {
        document.getElementById(
          `index-${mergesort[i][1]}`
        ).style.backgroundColor = "#DD5C5C";
        document.getElementById(
          `index-${mergesort[i][3]}`
        ).style.backgroundColor = "#DD5C5C";
        document.getElementById(`index-${mergesort[i][1]}`).style.height =
          window.innerWidth < 450
            ? `${Math.floor(mergesort[i][2]) * 3}px`
            : window.innerWidth < 600
            ? `${Math.floor(mergesort[i][2]) * 4}px`
            : `${Math.floor(mergesort[i][2]) * 5}px`;
        document.getElementById(`index-${mergesort[i][3]}`).style.height =
          window.innerWidth < 450
            ? `${Math.floor(mergesort[i][0]) * 3}px`
            : window.innerWidth < 600
            ? `${Math.floor(mergesort[i][0]) * 4}px`
            : `${Math.floor(mergesort[i][0]) * 5}px`;
      }, i * time);
      setTimeout(() => {
        document.getElementById(
          `index-${mergesort[i][1]}`
        ).style.backgroundColor = "#6399f1";
        document.getElementById(
          `index-${mergesort[i][3]}`
        ).style.backgroundColor = "#6399f1";
      }, i * time + (time - 20));
    } else {
      setTimeout(() => {
        document.getElementById(
          `index-${mergesort[i][0]}`
        ).style.backgroundColor = "#B578E8";
      }, i * time);
    }
  }
}

function mergeSort(array) {
  let arr = array;
  let animations = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        animations.push([arr[i], i, arr[j], j]);
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      } else {
        animations.push([i, j]);
      }
    }
    animations.push([i]);
  }
  return [animations];
}
