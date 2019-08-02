
function bubbleSort(array) {

  let Issorted = false; 
  let len = array.length;
  console.log(array.length)

  while(Issorted===false){

    console.log('waiting to sort')

    Issorted = true;
    for(let i = 0; i < len-1; i++){

      console.log('unsorted list start at', i, 'ends at', len)

      if(array[i]>array[i+1]){
        temp = array[i+1];
        array[i+1] = array[i];
        array[i] = temp;
        Issorted = false
      }
    }
    
  }
  return array
}

console.log(bubbleSort([1,5,2,8,7]))
console.log(bubbleSort([1,9,5,2,8,7]))

// https://www.youtube.com/watch?v=6Gv8vg0kcHc

//dlaczego musi sobie odejmuje --- length, przeciez nie dojdzie nigsy do ostatniego elementu 
