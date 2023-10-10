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

let pr = cube(-5);

console.log(pr);

pr
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => { console.log("I will always execute.") }
    )

console.log("Done");