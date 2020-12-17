var btnTranslate = document.querySelector("#btn-translate");
var textAreaValue = document.getElementById("text-area-value");
var translateOutput = document.getElementById("translate-output")


function takeInput () {
    console.log("textAreaValue", textAreaValue.value)
    translateOutput.innerHTML = textAreaValue.value
}

btnTranslate.addEventListener("click", takeInput)