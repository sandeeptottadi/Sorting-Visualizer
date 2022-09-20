export function quickSort_d(array) {
  let animations = [];
  quickSortHelper(array, 0, array.length - 1, animations);
  return animations;
}
function quickSortHelper(array, s = 0, e = array.length - 1, animations) {
  if (array.length === 1) return array;
  if (s >= e) return;
  let pivit = s;
  animations.push([pivit]);
  let i = s + 1,
    j = e;
  while (j >= i) {
    animations.push([i, j]);
    if (array[i] < array[pivit] && array[j] > array[pivit]) {
      animations.push([i, array[j], j, array[i]]);
      [array[i], array[j]] = [array[j], array[i]];
      i++;
      j--;
    } else if (array[i] < array[pivit]) j--;
    else i++;
  }
  animations.push([pivit, array[j], j, array[pivit], true]);
  [array[pivit], array[j]] = [array[j], array[pivit]];
  quickSortHelper(array, s, j - 1, animations);
  quickSortHelper(array, j + 1, e, animations);
}
