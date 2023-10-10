function heavyTask() {

    setTimeout(() => {
        for (let i = 0; i < 100000; i++) {

            for (let j = 0; j < 100000; j++) {

                console.log("Heavy task done.");
            }
        }
    }, 9000);

    console.log("Heavy Task logic will run after 9 sec.");
}

console.log("Start");
heavyTask();
console.log("End");