function cube(num) {

    return new Promise((resolve, reject) => {

        if (num < 0)
            reject("Please provide a positive number.");

        else
            setTimeout(() => {
                resolve(num ** 3);
            }, 5000);
    })
}

let pr = Promise.all([cube(5),cube(-3),cube(2)]);

pr
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })
