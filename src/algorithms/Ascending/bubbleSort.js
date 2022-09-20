export function bubbleSort(array) {
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
  return animations;
}
