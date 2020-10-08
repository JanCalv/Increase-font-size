var fontSize = 20;

document.querySelector("button").addEventListener("click", incSize)

function incSize() {
    if (fontSize % 2 === 0) {
        fontSize+=10;
    }
    document.querySelector("p").style.fontSize = fontSize +"px";
}