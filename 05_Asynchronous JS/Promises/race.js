function cube(num,delay) {

    return new Promise((resolve, reject) => {

        if (num < 0)
            reject("Please provide a positive number.");

        else
            setTimeout(() => {
                resolve(num ** 3);
            }, delay);
    })
}

let pr = Promise.all([cube(5,3000),cube(-3,2000),cube(2,5000)]);

pr
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })
