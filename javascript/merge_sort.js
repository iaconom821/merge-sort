function merge(arr1, arr2) {
  // type your code here
  const returnArr = []
  
  while(arr1[0] || arr2[0]){
    if (typeof(arr1[0]) !== "number"){
      returnArr.push(arr2[0])
      arr2.shift()
    } else if(typeof(arr2[0]) !== "number") {
      returnArr.push(arr1[0])
      arr1.shift()
    } else if(arr1[0] < arr2[0]){
      returnArr.push(arr1[0])
      arr1.shift()
    } else {
      returnArr.push(arr2[0])
      arr2.shift()
    }
  }

  return returnArr 
}

function mergeSort(arr) {
  // type your code here
  if (arr.length === 0){
    return arr
  }
  if (arr.length === 1){
    return arr
  }
  const middle = Math.round(arr.length/2)

  const left = []
  const right = []

  for(let i = 0; i < middle; i++){
    left.push(arr[i])
  }
  for(let i = middle; i < arr.length; i++){
    right.push(arr[i])
  }

  const newLeft = mergeSort(left)
  const newRight = mergeSort(right)
  
  return merge(newLeft, newRight)
}

if (require.main === module) {
  // add your own tests in here


  console.log(merge([1,5,7,10],[2,4,6,10,10,12]))

  console.log("Expecting: [1, 2]");
  console.log("=>", mergeSort([2, 1]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", mergeSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: [-10, 0, 2, 2, 5, 10, 20]");
  console.log("=>", mergeSort([10, -10, 0, 2, 20, 5, 2]));
}

module.exports = mergeSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
