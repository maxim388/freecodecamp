function mutation(arr) {
  let newArr = [arr[0].toLowerCase(), arr[1].toLowerCase()];
  debugger;
  for (let i = 0; i < newArr[1].length; i++)
    outer_block: {
      for (let j = 0; j < newArr[0].length; j++) {
        if (newArr[1][i] === newArr[0][j]) {
          break outer_block;
        }
        if (j === newArr[0].length - 1) {
          return false;
        }
      }
    }
  return true;
}

mutation(["hello", "hey"]);
