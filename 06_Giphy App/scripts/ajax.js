function doAjax(name) {

    let API = 'r8gNiohp2CBIU3fYs0JjhEKJPf4mNUI3';
    let baseUrl = `https://api.giphy.com/v1/gifs/search?api_key=${API}&q=${name}&limit=5`;

    let xmlHTTPRequest = new XMLHttpRequest();

    xmlHTTPRequest.onreadystatechange = function () {

        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
            printImages(this.responseText);
        }

        console.log(this.readyState);
    }

    xmlHTTPRequest.open("GET", baseUrl, true);
    xmlHTTPRequest.send()
}