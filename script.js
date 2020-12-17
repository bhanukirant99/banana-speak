var btnTranslate = document.querySelector("#btn-translate");
var textAreaValue = document.getElementById("text-area-value");

function takeInput () {
    console.log("textAreaValue", textArea.value)
}

btnTranslate.addEventListener("click", takeInput)