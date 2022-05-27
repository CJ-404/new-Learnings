// console.log("puk");
const wrapper = document.querySelector(".wrapper");
const header = document.querySelector("header");

function onDrag(evt) {
    let getStyle = window.getComputedStyle(wrapper);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    // console.log(left, right);
    wrapper.style.left = left + evt.movementX + "px";
    wrapper.style.top = top + evt.movementY + "px";
}

header.addEventListener("mousedown", () => {
    header.classList.add("active");
    document.addEventListener("mousemove", onDrag);
})

document.addEventListener("mouseup", () => {
    header.classList.remove("active");
    document.removeEventListener("mousemove", onDrag);
})