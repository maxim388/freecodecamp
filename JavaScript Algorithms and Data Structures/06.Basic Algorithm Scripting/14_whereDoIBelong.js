const getIndexToIns = (arr, num) => {
  let res = arr.sort((a, b) => a - b).findIndex((el) => el >= num);
  return res === -1 ? arr.length : res;
};

getIndexToIns([40, 60], 50);
