export function insertionSort(mainArray: number[]) {
  let array = mainArray.slice();
  let index = 1;
  let animations: any[] = [];
  while (index < array.length) {
    let item = array[index];
    let jindex = index - 1;
    while (jindex >= 0 && array[jindex] > item) {
      animations.push([jindex + 1, jindex, array[jindex], array[jindex + 1]]);
      array[jindex + 1] = array[jindex];
      jindex--;
    }
    array[jindex + 1] = item;
    animations.push([jindex + 1, index, array[jindex + 1], array[index]]);
    index++;
  }
  return animations;
}
