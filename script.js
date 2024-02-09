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

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=200"

async function getJoke() {
    btnEl.style.cursor = "wait";
    const response = await fetch(apiURL, options);
    const jsondata = await response.json();
    const url = jsonData.message;
}


function getJoke(){
    console.log("clicked");
}

btnEl.addEventListener("click", getJoke)

