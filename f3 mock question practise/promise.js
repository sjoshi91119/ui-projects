// Merge function to merge two sorted arrays
function merge(arr1, arr2, callback) {
  let mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  // Invoke the callback function with the merged array
  callback(mergedArray);
}

// Merge Sort function
function mergeSort(arr, callback) {
  if (arr.length <= 1) {
    callback(arr);
    return;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, mid);
  const rightArray = arr.slice(mid);

  // Recursively sort left and right halves
  mergeSort(leftArray, (sortedLeft) => {
    mergeSort(rightArray, (sortedRight) => {
      merge(sortedLeft, sortedRight, callback);
    });
  });
}

// Example usage
const sortedArray1 = [1, 3, 5, 7, 9];
const sortedArray2 = [2, 4, 6, 8, 10];

mergeSort([...sortedArray1, ...sortedArray2], (mergedArray) => {
  console.log("Merged Array:", mergedArray);
});
