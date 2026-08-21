const meassage = "Apple";
const text = document.getElementById("text");
let i = 0;
function typetext() {
    if (i < meassage.length) {
        text.textContent += meassage[i];
        i++;
        setTimeout(typetext, 260);
    }
}
typetext();