let count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2, 3, 4, 5, 6:
            count++;
            break;
        case 7, 8, 9:
            break;
        case 10, 'J', 'Q', 'K', 'A':
            count--;
            break;
    }
    let answer = "";
    if (count <= 0) answer = "Hold";
    if (count > 0) answer = "Bet";
    return count + "" + answer;
    // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');