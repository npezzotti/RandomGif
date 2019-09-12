const url = "https://api.giphy.com/v1/gifs/search?"
const apiKey = "api_key=Zw5WFdH43r4edQ8CgtZI453WmNqmVTef&q="
const limit = "&limit="
const offset = "&offset="
const remainingUrl = "&rating=PG&lang=en"
const search = document.querySelector("#search");
const heart = document.querySelector("#heart");
const arrow = document.querySelector("#next");
const input = document.getElementById("search");
const searchButton = document.querySelector("#search-button");
const gif = document.querySelector("#gif");

window.onload = randomGif();

async function randomGif() {
    let response = await axios.get("https://api.giphy.com/v1/gifs/random?api_key=Zw5WFdH43r4edQ8CgtZI453WmNqmVTef&tag=&rating=PG")
    gif.src = response.data.data.images.fixed_width.url;
}

searchButton.addEventListener("click", getUrl);

arrow.addEventListener("click", getUrl);


async function getUrl() {
    event.preventDefault();
    let index = Math.floor(Math.random * 10); 
    console.log(index)
    let response = await axios.get(url + apiKey + input.value + limit + 10 + offset + index + remainingUrl)
    gif.src = response.data.data[0].images.fixed_width.url
}
