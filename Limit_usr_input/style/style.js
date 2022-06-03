let inpTag = document.querySelector("input");
let countTag = document.querySelector(".count");
let max = parseInt(countTag.innerHTML);

inpTag.setAttribute("maxlength", max);
inpTag.addEventListener("input", check);

function check() {
    let len = inpTag.value.length;
    countTag.innerHTML = max - len;
}