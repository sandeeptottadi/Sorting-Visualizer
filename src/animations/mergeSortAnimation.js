export function animateMergeSort(animations, array, time) {
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName("array-bar");
    const isColorChange = i % 3 !== 2;
    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = i % 3 === 0 ? "#6CDB7B" : "#DD5C5C";
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * time);
      setTimeout(() => {
        barOneStyle.backgroundColor = "#6399F1";
        barTwoStyle.backgroundColor = "#6399F1";
      }, i * time + time);
    } else {
      setTimeout(() => {
        if (animations[i].length === 2) {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height =
            window.innerWidth < 450
              ? `${Math.floor(newHeight) * 3}px`
              : window.innerWidth < 600
              ? `${Math.floor(newHeight) * 4}px`
              : `${Math.floor(newHeight) * 5}px`;
        } else {
          const [barOneIdx, newHeight1, barTwoIdx, newHeight2] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTowStyle = arrayBars[barTwoIdx].style;
          barOneStyle.height =
            window.innerWidth < 450
              ? `${Math.floor(newHeight1) * 3}px`
              : window.innerWidth < 600
              ? `${Math.floor(newHeight1) * 4}px`
              : `${Math.floor(newHeight1) * 5}px`;
          barTowStyle.height =
            window.innerWidth < 450
              ? `${Math.floor(newHeight2) * 3}px`
              : window.innerWidth < 600
              ? `${Math.floor(newHeight2) * 4}px`
              : `${Math.floor(newHeight2) * 5}px`;
        }
      }, i * time + time - 500);
    }
  }
}
