

let tabelOf = function (number) {

    for (var i = 1; i <= 10; i++) {
        let multiply = i * number;
        console.log(i + ' x ' + number + ' = ' + multiply);
        multiply = 0;
    }

}

tabelOf(9);


let tabelOfAll = function () {

    for (let t = 0; t <= 10; t++) {

        for (var i = 1; i <= 10; i++) {
            let multiply = i * t;
            console.log(i + ' x ' + t + ' = ' + multiply);
            multiply = 0;
        }
    }

}

tabelOfAll();