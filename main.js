const API_KEY = "DEMO_KEY";
document.querySelector("#app").innerHTML = "<p>loading...</p>";
fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`).then(response => response.json()).then(data => {
    console.log(data);
})

