function largestOfFour(arr) {
    let arrWithLargestNum = [];

    for (let i = 0; i < arr.length; i++) {
        let largestNum;
        largestNum = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            if (largestNum < arr[i][j]) largestNum = arr[i][j];
        }
        arrWithLargestNum.push(largestNum);
    }
    return arrWithLargestNum;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);