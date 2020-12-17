var btnTranslate = document.querySelector("#btn-translate");
var textAreaValue = document.getElementById("text-area-value");
var translatedOutput = document.getElementById("translated-output")


function takeInput () {
    console.log("textAreaValue", textAreaValue.value)
    translatedOutput.innerHTML = textAreaValue.value
}

btnTranslate.addEventListener("click", takeInput)