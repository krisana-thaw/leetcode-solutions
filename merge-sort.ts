const valueRan: number[] = [];
for (let i = 0; i < 5; i++) {
  valueRan.push(Math.floor(Math.random() * 100));
}
console.log("valueRan: ", valueRan);

const merge = (left: number[], right: number[]) => {
  let result: number[] = [];

  while (left.length > 0 || right.length > 0) {
    //when have left and right array
    if (left.length > 0 && right.length > 0) {
      //compare first index of left and right array
      //delete first index of minimum
      if (left[0] < right[0]) {
        result.push(left[0]);
        left.shift();
      } else {
        result.push(right[0]);
        right.shift();
      }
    }

    //when have left array only
    else if (left.length > 0) {
      result.push(left[0]);
      left.shift();
    }

    //when have right array only
    else if (right.length > 0) {
      result.push(right[0]);
      right.shift();
    }
  }
  return result;
};

const mergeSort = (listNum: number[]) => {
  if (listNum.length <= 1) return listNum;

  const middleIndex = Math.ceil(listNum.length / 2);
  let arrLeft = listNum.slice(0, middleIndex);
  let arrRight = listNum.slice(middleIndex);

  arrLeft = mergeSort(arrLeft);
  arrRight = mergeSort(arrRight);

  return merge(arrLeft, arrRight);
};

const res = mergeSort(valueRan);
console.log("result: ", res);
