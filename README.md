TITLE:
Random Gif

DESCRIPTION:
    This app displays gifs for your enjoyment! Upon page load, the app loads random gifs by default (or accessed through the ? button) but can also display gifs given search criteria or a series of trending gifs with the fire button. The user can then navigate to a new gif with the arrow button on the right and can save favorites by clicking the heart. Favorites are a displayed by clicking the floppy disk button.

DAILY GOALS: 

Tuesday: 
    create idea, find API, get approval, begin creating HTML 

Wednesday: 
    Finish rough HTML and CSS styling

Thursday: 
    Begin working on Javascript, connecting API

Friday: 
    Finish Javascript file, make responsive


WIREFRAMES: 
    https://res.cloudinary.com/dz6rzbi7d/image/upload/v1568168726/IMG_1644_mlztm8.heic

JSON EXCERPT:
    https://res.cloudinary.com/dz6rzbi7d/image/upload/v1568168511/Screen_Shot_2019-09-10_at_7.11.35_PM_ueypug.png



PRIORITY MATRIX:
    
    A. Make an HTML Page with an title and input box space for Gif, .
    
    B. Create a space for a random gif to show up given user prompt
    
    C. Create functionality for the input box
    
    D. Connect to API
    
    E. Create a button that will act as a "next gif" to shuffle through results

API:
    api.giphy.com


FEATURES NEEDED TO MEET MVP:
1. An HTML page displaying a title, search bar, space for gif, a like button, and a next button
2. CSS styling which makes it responsive and beautiful.
3. An API connection which will load a gif matching the input criteria.
4. Javascript functionality for all buttons and the form.

PMVP: 
1. Create topic buttons like "popular", "new"
2. Add sound effects
3. Storage of favorite gifs

TIME-FRAMES:

    -Getting all elements to appear in HTML page: Priority, H/ Estimated time: 2 hours Actual: 5hrs

    -Fitting elements on the page properly: 3 hours/ actual: 4hrs

    -Connecting API: Priority: H/ Estimated time: 4 hours/ actual: 4hrs

    -Javascript functionality: Priority: H/ Estimated time: 4 hours/ actual: 6hrs

    -Adding special buttons: Priority: M/ Estimated time: 2 hours/ actual 1hr

    -Special button functionality: Priority: M/ Estimated time: 3 hours/ actual/ 4hrs

CODE SNIPPET:
    
    if (mobile.matches) {
            gif.src = response.data.data.images.fixed_width.url;
        }
        else {
            gif.src = response.data.data.images.original.url;
        }