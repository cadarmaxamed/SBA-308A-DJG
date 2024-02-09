//using Dom Monuplation
const btnEl = document.getElementById("btn");

//getting API key and catche
const apiKey = "fi7n7HFSOGMHu1aEPWSU/w==HgiYLSB32QmIg3qb";

const options = {
    method: "GET",
headers:{
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke() {
    btnEl.style.cursor = "wait";
    const response = await fetch("https://api.api-ninjas.com/v1/dadjokes?limit=1", options);
    const jsondata = await response.json();
// 
const jokes = document.getElementById("joke");
jokes.textContent = jsondata[0].joke
}
btnEl.src = btnEl.url;
btnEl.style.cursor = 'pointer';

// function getJoke(){
//     console.log("clicked");
// }

btnEl.addEventListener("click", getJoke);

