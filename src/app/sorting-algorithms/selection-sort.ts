export function selectionSort(mainArray: number[]) {
  let animations: any[] = [];
  let array: number[] = mainArray.slice();
  let tempSmaller: number;
  for (let index = 0; index < array.length - 1; index++) {
    tempSmaller = index;
    for (let jindex = index + 1; jindex < array.length; jindex++) {
      if (array[jindex] < array[tempSmaller]) tempSmaller = jindex;
    }
    if (tempSmaller != index) {
      animations.push([tempSmaller, index, array[index], array[tempSmaller]]);
      [array[tempSmaller], array[index]] = [array[index], array[tempSmaller]];
    }
  }
  return animations;
}
