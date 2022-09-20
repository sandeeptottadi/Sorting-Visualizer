export function mergeSort_d(array) {
  let auxiliaryArray = array.slice();
  let animations = [];
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return [array, animations];
}

function mergeSortHelper(array, startIdx, endIdx, auxiliaryArray, animations) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, array, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, array, animations);
  doMergeSort(array, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMergeSort(
  array,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxiliaryArray[i] > auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i]]);
      array[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, auxiliaryArray[j], j, auxiliaryArray[i]]);
      array[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, auxiliaryArray[i]]);
    array[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxiliaryArray[j]]);
    array[k++] = auxiliaryArray[j++];
  }
}

// [8, 3, 2, 1, 6, 9, 4][8][(3, 2)][3][2][(3, 8)];
