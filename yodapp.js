// get me these elements
var btnClick = document.querySelector("#tapme");
var txt = document.querySelector("#textArea");
var div = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/yoda.json"

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

// error message 
function errorHandler(error) {
    console.log("error occured", error);
    alert("Wrong with server, something! Again after some time, try.")
}

// taking input
function clickHandler() {
    var inputText = txt.value; 

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            div.innerText = translatedText; // output
           })
        .catch(errorHandler)
};

btnClick.addEventListener("click", clickHandler)