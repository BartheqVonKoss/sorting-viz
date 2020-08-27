export function bubbleSort(mainArray: number[]) {
  let animations = [];
  let array = mainArray.slice();
  let result = performBubble(array, animations);
  if (!result[1]) return animations;
  let i = 0;
  while (true) {
    result = performBubble(result[0], animations);
    if (!result[1]) break;
  }
  return animations;
}

function performBubble(array, animations: any[]) {
  let count = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] > array[index + 1]) {
      [array[index], array[index + 1]] = [array[index + 1], array[index]];
      animations.push([index, array[index], array[index + 1]]);
      count++;
    }
  }
  return [array, true ? count > 0 : false];
}
