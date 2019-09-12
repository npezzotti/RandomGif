const url = "https://api.giphy.com/v1/gifs/search?"
const apiKey = "api_key=Zw5WFdH43r4edQ8CgtZI453WmNqmVTef&q="
const remainingUrl = "&limit=1&offset=0&rating=PG&lang=en"
const search = document.querySelector("#search");
const heart = document.querySelector("#heart");
const arrow = document.querySelector("#next");
const input = document.getElementById("search");
const searchButton = document.querySelector("#search-button");
const gif = document.querySelector("#gif");

searchButton.addEventListener("click", getUrl);

async function getUrl() {
    event.preventDefault();
    let response = await axios.get(url + apiKey + input.value + remainingUrl)
    gif.src = response.data.data[0].images.downsized.url
}
