export function quickSort(mainArray: number[]) {
  let array = mainArray.slice();
  let animations = [];
  animations = performQuickSort(array, 0, mainArray.length - 1, animations);
  return animations;
}

function performQuickSort(
  array: number[],
  loIdx: number,
  hiIdx: number,
  animations: number[]
) {
  if (loIdx < hiIdx) {
    let pivotIdx = partition(array, loIdx, hiIdx, animations);
    performQuickSort(array, loIdx, pivotIdx, animations);
    performQuickSort(array, pivotIdx + 1, hiIdx, animations);
  }
  return animations;
}

function partition(
  array: number[],
  loIdx: number,
  hiIdx: number,
  animations: any[]
) {
  let i = loIdx - 1;
  let j = hiIdx + 1;
  while (true) {
    do {
      j--;
    } while (array[j] > array[loIdx]);
    do {
      i++;
    } while (array[i] < array[loIdx]);
    if (i >= j) return j;
    animations.push([i, j, array[i], array[j]]);
    [array[i], array[j]] = [array[j], array[i]];
  }
}
