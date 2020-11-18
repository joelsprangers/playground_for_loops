

let checkEvenOdd = function () {

    for (i = 0; i <= 20; i++) {
        if (i === 0) {
            console.log(i + ': this number is even nor odd!')
        }

        else if (i % 2) {
            console.log(i + ': this number is odd!')
        } else {
            console.log(i + ': this number is even!')
        }
    }
}

checkEvenOdd();

