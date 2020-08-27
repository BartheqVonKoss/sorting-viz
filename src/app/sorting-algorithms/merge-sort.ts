function performMerge(
  mainArray: number[],
  begIdx: number,
  midIdx: number,
  endIdx: number,
  auxArray: number[],
  animations: any[]
) {
  let i = begIdx,
    j = midIdx + 1,
    k = begIdx;
  while (i <= midIdx && j <= endIdx) {
    if (auxArray[i] <= auxArray[j]) {
      animations.push([k, auxArray[i]]);
      mainArray[k++] = auxArray[i++];
    } else {
      animations.push([k, auxArray[j]]);
      mainArray[k++] = auxArray[j++];
    }
  }
  while (i <= midIdx) {
    animations.push([k, auxArray[i]]);
    mainArray[k++] = auxArray[i++];
  }
  while (j <= endIdx) {
    animations.push([k, auxArray[j]]);
    mainArray[k++] = auxArray[j++];
  }
}

function mergeOverWhole(
  mainArray: number[],
  auxArray: number[],
  begIdx: number,
  endIdx: number,
  animations: any[]
) {
  let midIdx = Math.floor((begIdx + endIdx) / 2);
  if (begIdx == endIdx) return;
  mergeOverWhole(auxArray, mainArray, begIdx, midIdx, animations);
  mergeOverWhole(auxArray, mainArray, midIdx + 1, endIdx, animations);
  performMerge(mainArray, begIdx, midIdx, endIdx, auxArray, animations);
}

export function mergeSort(mainArray: number[]) {
  let animations = [];
  let auxArray: number[] = mainArray.slice();
  let mainCopy: number[] = mainArray.slice();
  mergeOverWhole(mainCopy, auxArray, 0, mainArray.length - 1, animations);
  return animations;
}
