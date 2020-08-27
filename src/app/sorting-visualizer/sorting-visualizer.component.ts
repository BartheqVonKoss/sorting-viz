import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { mergeSort } from '../sorting-algorithms/merge-sort';
import { bubbleSort } from '../sorting-algorithms/bubble-sort';
import { quickSort } from '../sorting-algorithms/quick-sort';
import { heapSort } from '../sorting-algorithms/heap-sort';
import { insertionSort } from '../sorting-algorithms/insertion-sort';
import { selectionSort } from '../sorting-algorithms/selection-sort';

@Component({
  selector: 'app-sorting-visualizer',
  styleUrls: ['./sorting-visualizer.component.css'],
  templateUrl: './sorting-visualizer.component.html',
})
export class SortingVisualizerComponent implements OnInit, OnChanges {
  amount: number[] = [20, 100, 200, 300, 350];
  barsNumber: number = this.amount[0];
  state: number[] = [];

  resetArray() {
    const array: number[] = [];
    for (let i = 0; i < this.barsNumber; i++) {
      array.push(this.randomIntFromInterval(5, 1000));
    }
    this.state = array;
  }

  randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  call(option) {
    console.log(option);
  }

  ngOnInit(): void {
    this.resetArray();
  }
  ngOnChanges(changes: SimpleChanges) {
    let change = changes['barsNumber'];
    console.log(change);
    this.resetArray();
    console.log(changes);
    console.log(this.barsNumber);
  }
  onStart() {
    console.log('sorting started');
  }

  bubbleSort() {
    const animations = bubbleSort(this.state);
    let bars = document.getElementsByClassName('array-bar');
    for (let index = 0; index < animations.length; index++) {
      setTimeout(() => {
        bars[animations[index][0]].attributes[
          'style'
        ].value = `height: ${animations[index][1]}px`;
        bars[animations[index][0] + 1].attributes[
          'style'
        ].value = `height: ${animations[index][2]}px`;
        // bars[animations[index+1][0]].attributes['style'].value =`height: ${animations[index][1]}px`;
      }, 100);
    }
  }
  mergeSort() {
    const autoSorted = this.state.slice().sort((a, b) => a - b);
    const animations = mergeSort(this.state);
    let bars = document.getElementsByClassName('array-bar');
    for (let index = 0; index < animations.length; index++) {
      setTimeout(() => {
        bars[animations[index][0]].attributes[
          'style'
        ].value = `height: ${animations[index][1]}px`;
      }, 100);
    }
  }
  quickSort() {
    const animations = quickSort(this.state);
    let bars = document.getElementsByClassName('array-bar');
    for (let index = 0; index < animations.length; index++) {
      setTimeout(() => {
        bars[animations[index][0]].attributes[
          'style'
        ].value = `height: ${animations[index][3]}px`;
        bars[animations[index][1]].attributes[
          'style'
        ].value = `height: ${animations[index][2]}px`;
      }, 100);
    }
  }
  heapSort() {
    const animations = heapSort(this.state);
    let bars = document.getElementsByClassName('array-bar');
    for (let index = 0; index < animations.length; index++) {
      setTimeout(() => {
        bars[animations[index][0]].attributes[
          'style'
        ].value = `height: ${animations[index][2]}px`;
        bars[animations[index][1]].attributes[
          'style'
        ].value = `height: ${animations[index][3]}px`;
      }, 100);
    }
  }
  insertionSort() {
    const animations = insertionSort(this.state);
    let bars = document.getElementsByClassName('array-bar');
    for (let index = 0; index < animations.length; index++) {
      setTimeout(() => {
        bars[animations[index][0]].attributes[
          'style'
        ].value = `height: ${animations[index][2]}px`;
        bars[animations[index][1]].attributes[
          'style'
        ].value = `height: ${animations[index][3]}px`;
      }, 100);
    }
  }
  selectionSort() {
    const animations = selectionSort(this.state);
    let bars = document.getElementsByClassName('array-bar');
    for (let index = 0; index < animations.length; index++) {
      setTimeout(() => {
        bars[animations[index][0]].attributes[
          'style'
        ].value = `height: ${animations[index][2]}px`;
        bars[animations[index][1]].attributes[
          'style'
        ].value = `height: ${animations[index][3]}px`;
      }, 100);
    }
  }

  testSorting() {
    for (let index = 0; index < 333; index++) {
      let testArray = this.resetArray();
      this.mergeSort();
    }
  }

  areEqual(array1: number[], array2: number[]) {
    if (array1.length !== array2.length) return false;
    for (let index = 0; index < array1.length; index++) {
      if (array1[index] !== array2[index]) return false;
      return true;
    }
  }
}
