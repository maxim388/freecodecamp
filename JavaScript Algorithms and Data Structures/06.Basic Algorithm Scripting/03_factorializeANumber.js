function factorialize(num) {
    let numFact = 1;
    for (let i = 1; i <= num; i++) {
        numFact = numFact * i;
    }
    return numFact;
}

factorialize(5);