function doAjax(searchValue) {

    let API = 'r8gNiohp2CBIU3fYs0JjhEKJPf4mNUI3';
    let baseUrl = `https://api.giphy.com/v1/gifs/search?api_key=${API}&q=${searchValue}&limit=5`;

    const promise = fetch(baseUrl);
    return promise;
}