function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j);
    }
  }
  return arr;
}

function swap(arr, index) {
  /* let temp = arr[index];
  arr[index] = arr[index + 1];
  arr[index + 1] = temp;
  return arr; */

  //let [a,b,c] = [1 , 2, 3]
  [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
  return arr;
}
