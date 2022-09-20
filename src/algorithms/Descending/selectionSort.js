export function selectionSort_d(array) {
  let animations = [];
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i; j < array.length; j++) {
      animations.push([i, j]);
      if (array[j] > array[min]) {
        min = j;
      }
    }
    if (min === i || i === array.length - 1) {
      animations.push([i, array[i], i, array[i]]);
    } else {
      animations.push([i, array[min], min, array[i]]);
    }
    [array[i], array[min]] = [array[min], array[i]];
  }
  return animations;
}
