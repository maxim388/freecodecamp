function findLongestWordLength(str) {
    let arrWord = str.split(' ');
    let maxStrWord = "";
    for (let i = 0; i < arrWord.length; i++) {
        if (arrWord[i].length > maxStrWord.length) maxStrWord = arrWord[i];
    }
    return maxStrWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");