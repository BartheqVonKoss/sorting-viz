export function heapSort(mainArray: number[]) {
  // building max-heap
  let array = mainArray.slice();
  let animations: any[] = [];
  let length = array.length - 1;
  for (let index = Math.floor((array.length - 1) / 2); index >= 0; index--) {
    heapify(array, length, index, animations);
  }
  // heap sorting
  while (length > 0) {
    [array[0], array[length]] = [array[length], array[0]];
    animations.push([0, length, array[0], array[length]]);
    heapify(array, length, 0, animations);
    length--;
  }
  return animations;
}

function heapify(array: number[], len: number, i: number, animations: any[]) {
  let largest = i;
  if (2 * i + 1 < len && array[2 * i + 1] > array[largest]) {
    largest = 2 * i + 1;
  }
  if (2 * i + 2 < len && array[2 * i + 2] > array[largest]) {
    largest = 2 * i + 2;
  }
  if (largest != i) {
    animations.push([largest, i, array[largest], array[i]]);
    [array[largest], array[i]] = [array[i], array[largest]];
    heapify(array, len, largest, animations);
  }
}
