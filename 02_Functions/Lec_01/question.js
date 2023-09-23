function add() {

    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {

        if (arguments[i] instanceof Array) {

            for (let j = 0; j < arguments[i].length; j++) {

                if (typeof arguments[i][j] === 'function')
                    arguments[i][j] = arguments[i][j]();

                sum += isNaN(parseInt(arguments[i][j])) ? 0 : parseInt(arguments[i][j]);
            }
        }

        else {

            if (typeof arguments[i] === 'function')
                arguments[i] = arguments[i]();

            sum += isNaN(parseInt(arguments[i])) ? 0 : parseInt(arguments[i]);
        }
    }

    return sum;
}

let res = add(1,"2","three");
console.log(res);