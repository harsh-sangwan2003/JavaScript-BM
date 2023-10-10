function cube(num,callBack){

    setTimeout(() => {
        callBack(num**3);
    }, 3000);
}

function cubeResult(res){

    console.log("Result is: ",res);
}

cube(5,cubeResult);