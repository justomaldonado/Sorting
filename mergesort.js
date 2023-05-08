function split(wholeArray) {
  /* tu código acá para definir el firstHalf y secondHalf array */
  let half = Math.ceil(wholeArray.length / 2);
  let firstHalf = wholeArray.slice(0, half);
  let secondHalf = wholeArray.slice(half);

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let arr = [];
  let index1 = 0;
  let index2 = 0;
  while (index1 < arr1.length || index2 < arr2.length) {
    if (arr1[index1] < arr2[index2] || !arr2[index2]) {
      arr.push(arr1[index1]);
      index1++;
    } else {
      arr.push(arr2[index2]);
      index2++;
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length > 1) {
    let [firstHalf, secondHalf] = split(arr);
    firstHalf = mergeSort(firstHalf);
    secondHalf = mergeSort(secondHalf);
    arr = merge(firstHalf, secondHalf);
  }

  return arr;
}
