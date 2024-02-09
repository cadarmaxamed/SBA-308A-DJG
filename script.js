const btnEl = document.getElementById("btn")

const apiKey = "fi7n7HFSOGMHu1aEPWSU/w==HgiYLSB32QmIg3qb";

const options = {
    method: "GET",
headers:{
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke() {
    const response = await fetch(apiURL, options);
    const data = await response.json()
    console.log(data);
}


function getJoke(){
    console.log("clicked");
}

btnEl.addEventListener("click", getJoke)

