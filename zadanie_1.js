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
  
//bubble sort 


function bubbleSort(array) {

  let Issorted = false; 
  let len = array.length;
  console.log(array.length)

  while(Issorted===false){

    console.log('waiting to sort')

    for(let i = 0; i < len-1; i++){

    console.log('unsorted list start at', i, 'ends at', len)

      if(array[i]>array[i+1]){
        temp = array[i+1];
        array[i+1] = array[i];
        array[i] = temp;
      }
    }
    Issorted = true;
  }
  return array
}

console.log(bubbleSort([1,5,2,8,7]))

// https://www.youtube.com/watch?v=6Gv8vg0kcHc

//dlaczego musi sobie odejmuje --- length, przeciez nie dojdzie nigsy do ostatniego elementu 

