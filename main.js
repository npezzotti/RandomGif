const url = "https://api.giphy.com/v1/gifs/search?";
const apiKey = "api_key=Zw5WFdH43r4edQ8CgtZI453WmNqmVTef&q=";
const limit = "&limit=";
const offset = "&offset=";
const remainingUrl = "&rating=PG&lang=en";
const heart = document.querySelector("#heart");
const arrow = document.querySelector("#next");
const input = document.getElementById("search");
const disk = document.getElementById("floppy-disk")
const trending = document.getElementById("trending")
const random = document.getElementById("random")
const searchButton = document.querySelector("#search-button");
const gif = document.getElementById("gif");
let searchText = "";
const mobile = window.matchMedia("(max-width: 900px)")

window.onload = randomGif();

searchButton.addEventListener("click", getUrl);

async function randomGif() {
    let response = await axios.get("https://api.giphy.com/v1/gifs/random?api_key=Zw5WFdH43r4edQ8CgtZI453WmNqmVTef&tag=&rating=PG")
    if (mobile.matches) {
        gif.src = response.data.data.images.fixed_width.url;
    }
    else {
        gif.src = response.data.data.images.original.url;
    }
    arrow.removeEventListener("click", trendingGif);
    arrow.removeEventListener("click", shuffle)
    arrow.removeEventListener("click", shuffleSaved)
    arrow.addEventListener("click", randomGif);
    searchText = ""
}

async function getUrl() {
    event.preventDefault();
    searchText = input.value;
    input.value = "";
    let index = Math.floor((Math.random() * 100) + 1);
    let response = await axios.get(url + apiKey + searchText + limit + 1 + offset + index + remainingUrl);
    if (mobile.matches) {
        gif.src = response.data.data[0].images.fixed_width.url;
    }
    else {
        gif.src = response.data.data[0].images.downsized.url;
    }
    arrow.removeEventListener("click", trendingGif);
    arrow.removeEventListener("click", randomGif)
    arrow.removeEventListener("click", shuffleSaved)
    arrow.addEventListener("click", shuffle);
}

async function shuffle() {
    let index = Math.floor((Math.random() * 100) + 1);
    let response = await axios.get(url + apiKey + searchText + limit + 1 + offset + index + remainingUrl);
    if (mobile.matches) {
        gif.src = response.data.data[0].images.fixed_width.url;
    }
    else {
        gif.src = response.data.data[0].images.downsized.url;
    }
}

async function trendingGif() {
    let response = await axios.get("https://api.giphy.com/v1/gifs/trending?api_key=Zw5WFdH43r4edQ8CgtZI453WmNqmVTef" + limit + 300 + remainingUrl);
    if (mobile.matches) {
        gif.src = response.data.data[Math.floor(Math.random() * 300) + 1].images.fixed_width.url;
    }
    else {
        gif.src = response.data.data[Math.floor(Math.random() * 300) + 1].images.original.url;
    }
    arrow.removeEventListener("click", randomGif);
    arrow.removeEventListener("click", shuffle);
    arrow.removeEventListener("click", shuffleSaved)
    arrow.addEventListener("click", trendingGif);
    searchText = ""
}

random.addEventListener("click", randomGif);

heart.addEventListener("click", save);

trending.addEventListener("click", trendingGif);

// function save() {
//     localStorage.setItem(gif.src, localStorage.length);
//     console.log("clicked", localStorage, Object.keys(localStorage));
// }

// disk.addEventListener("click", displayStorage);

// function displayStorage() {
//     let savedItems = window.localStorage.getItem(localStorage)
//     if (savedItems) {
//         gif.src = savedItems
//     }
//     const children = document.getElementById("saved-gifs");
//     while (children.lastChild) {
//         children.removeChild(children.lastChild);
//     }
//     Object.keys(localStorage).forEach((image, index) => {
//         console.log(image);
//         let cardImage = `<img src = "${image}" id ="gif-${index}" alt = "Gif">`;
//         let node = document.getElementById("saved-gifs").insertAdjacentHTML('beforeend', cardImage);
//     });
// }

// localStorage.clear();

function save() {
    localStorage.setItem(localStorage.length, gif.src);
}

let storedGifs = []

function pushStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        let keys = localStorage.getItem(i);
        storedGifs.push(keys)
    }
}

disk.addEventListener("click", showSaved);

function showSaved() {
    pushStorage()
    gif.src = storedGifs[0];
    arrow.removeEventListener("click", randomGif);
    arrow.removeEventListener("click", randomGif);
    arrow.removeEventListener("click", shuffle);
    arrow.addEventListener("click", shuffleSaved)
}

function shuffleSaved() {
    for (let i = 0; i < storedGifs.length -1; i++) {
        if (storedGifs[i] == gif.src) {
            gif.src = storedGifs[i + 1];
            return;
        } else if (storedGifs[i] == storedGifs.length) {
            gif.src = storedGifs[0]
        }
    }
    storedGifs = []
}
