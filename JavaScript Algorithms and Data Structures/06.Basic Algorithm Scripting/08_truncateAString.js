function truncateString(str, num) {
    if (str.length <= num) return str;
    let newStr = str.slice(0, num) + "...";
    return newStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);