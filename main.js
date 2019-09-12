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

window.onload = randomGif();

searchButton.addEventListener("click", getUrl);

async function randomGif() {
    let response = await axios.get("https://api.giphy.com/v1/gifs/random?api_key=Zw5WFdH43r4edQ8CgtZI453WmNqmVTef&tag=&rating=PG")
    gif.src = response.data.data.images.downsized.url;
    arrow.removeEventListener("click", shuffle)
    arrow.addEventListener("click", randomGif);
    searchText = ""
}

async function getUrl() {
    event.preventDefault();
    searchText = input.value;
    input.value = "";
    let index = Math.floor((Math.random() * 50) + 1);
    let response = await axios.get(url + apiKey + searchText + limit + 1 + offset + index + remainingUrl);
    gif.src = response.data.data[0].images.downsized.url;
    arrow.removeEventListener("click", randomGif)
    arrow.addEventListener("click", shuffle);
}

async function shuffle() {
    let index = Math.floor((Math.random() * 50) + 1);
    let response = await axios.get(url + apiKey + searchText + limit + 1 + offset + index + remainingUrl);
    gif.src = response.data.data[0].images.downsized.url;
}

random.addEventListener("click", randomGif);
heart.addEventListener("click", save);

function save() {
    window.localStorage.setItem("link", gif.src)
}

disk.addEventListener("click", function displayStorage() {
    let savedItems = window.localStorage.getItem("link")
    gif.src = savedItems
})