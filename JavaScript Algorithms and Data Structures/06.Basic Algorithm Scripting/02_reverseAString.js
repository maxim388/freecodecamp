function reverseString(str) {
    let reverseStr = str.split('').reverse().join('')
    return reverseStr;
}

reverseString("hello");