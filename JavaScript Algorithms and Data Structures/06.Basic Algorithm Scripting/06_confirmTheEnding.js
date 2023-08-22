function confirmEnding(str, target) {
    let checkTargetStr = '';
    checkTargetStr = str.substring(str.length - target.length);
    return checkTargetStr === target;
}

confirmEnding("Bastian", "n");