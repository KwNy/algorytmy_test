function merge(arrA, arrB){

    let result = []; 
  
    while(arrA.length>0 && arrB.length>0){
      if(arrA[0]<arrB[0]){
        result.push(arrA[0]);
        arrA.shift();
      }
      else {
        result.push(arrB[0]);
        arrB.shift()
      }
    }
    // arrA.len == 0 || arrB.len ==0
    // while(arrA.length>0){
    //   result.push(arrA[0]);
    //   arrA.shift();
    // }
    // while(arrB.length>0){
    //   result.push(arrB[0]);
    //   arrB.shift();
    // }
  
  
  return result.concat(arrB, arrA);
  }
  
  function mergeSort(arr){
    console.log(arr)
     let mid = Math.floor(arr.length/2);
  
    if(arr.length === 0 || arr.length === 1){
      return arr
    }
    //recursive call result 
    let leftSorted = mergeSort(arr.slice(0,mid))
  
    let rightSorted = mergeSort(arr.slice(mid,arr.length));
  
    return merge(leftSorted, rightSorted)
  }
  
  console.log(mergeSort([9,8,100,7]))
  

function bubbleSort(array) {

  let isSorted = false; 
  let len = array.length;

  while(isSorted===false){

    console.log('waiting to sort')
    isSorted = true;

    for(let i = 0; i < len-1-i; i++){

    console.log('unsorted list starts at', i, 'ends at', len)

      if(array[i]>array[i+1]){
        temp = array[i+1];
        array[i+1] = array[i];
        array[i] = temp;
        isSorted = false;
      }
    }
  }
  return array
}

console.log(bubbleSort([1,5,2,8,7]))

// https://www.youtube.com/watch?v=6Gv8vg0kcHc

function bubbleSort_2(arr){

  for(let i = 0; i < arr.length; i++){
  
    for(let j = 1; j < arr.length-1-i; j++){
      if(arr[j]>arr[j+1]){
        let temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = arr[j+1]
      }
    }
  }
  return arr
}


function bubbleSort_3(array) {
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length-1-i; j++){
      if (array[j] > array[j+1]) [array[j], array[j+1]] = [array[j+1], array[j]]; // Using ES6 array destructuring to swap
    }
  }
  return array;
}


function selectionSort(arr){
  for(let i = 0; i < arr.length; i++){
    console.log('--->',i)
    let minIndx = i;
    for(let j = i + 1; j <=arr.length; j++){

      console.log('*******>',j)
      if(arr[j]<arr[minIndx]){
        minIndx = j
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndx];
    arr[minIndx] = temp
  }
  return arr
}

// console.log(selectionSort([2,1,7,3]))


// Insertion Sort Algorithm

// Get a list of unsorted numbers
// Set a marker for the sorted section after the first number in the list
// Repeat steps 4 through 6 until the unsorted section is empty
// Select the first unsorted number
// Swap this number to the left until it arrives at the correct sorted position
// Advance the marker to the right one position
// Stop
