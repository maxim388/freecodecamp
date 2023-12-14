function titleCase(str) {
  let strLowerCase = str.toLowerCase();
  let arr = strLowerCase.split(" ");
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let elem = `${arr[i][0].toUpperCase()}${arr[i].slice(1)}`;
    res.push(elem);
  }
  return res.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
