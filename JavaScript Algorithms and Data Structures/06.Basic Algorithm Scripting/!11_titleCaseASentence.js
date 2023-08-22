function titleCase(str) {
    let strLowerCase = str.toLowerCase();
    let arr = strLowerCase.split(' ');
    let newArrUp = [];
    for (let i = 0; i <= arr.length; i++) {
        let elem = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        newArrUp.push();
    }
    return newArrUp.join(' ');
}

titleCase("I'm a little tea pot");