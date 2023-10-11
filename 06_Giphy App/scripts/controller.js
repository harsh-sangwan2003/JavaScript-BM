window.addEventListener("load", () => {

    getAjaxResult('Iron Man');
    document.querySelector("#search").addEventListener("change", search);
})

function search() {

    let searchValue = document.querySelector("#search").value;
    document.querySelector("#output").innerHTML = ``;
    getAjaxResult(searchValue);
}

function getAjaxResult(searchValue) {

    const promise = doAjax(searchValue);

    promise.then(res => {
        res.json().then(object => {
            printImages(object);
        }).catch(err => {
            console.log(err);
        });
    }).catch(err => {
        console.log(err)
    });
}

function printImages(result) {

    // let obj = JSON.parse(result);
    let imageList = result.data;
    let outpuDiv = document.querySelector("#output");

    for (let imageObject of imageList) {

        let url = imageObject["images"]["original"]["url"];

        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = url;
        div.appendChild(img);
        outpuDiv.appendChild(div);
    }
}