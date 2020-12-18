var btnTranslate = document.querySelector("#btn-translate");
var textAreaValue = document.getElementById("text-area-value");
var translateOutput = document.getElementById("translate-output")


function takeInput () {
    console.log("textAreaValue", textAreaValue.value)
    var url = `https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=${textAreaValue.value}`;
    translateOutput.innerHTML = textAreaValue.value
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
}

btnTranslate.addEventListener("click", takeInput)