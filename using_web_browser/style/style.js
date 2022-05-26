let userAgent = navigator.userAgent;
// console.log(userAgent);
let Browser;
if (userAgent.match(/edg/i)) {
    Browser = "edge";
} else if (userAgent.match(/firefox|fxios/i)) {
    Browser = "firfox";
} else if (userAgent.match(/opr/i)) {
    Browser = "opera";
} else if (userAgent.match(/chrome|chromium|crios/i)) {
    Browser = "chrome";
} else if (userAgent.match(/safari/i)) {
    Browser = "safari";
} else {
    alert("other browser");
}

const logo = document.querySelector(`.logos .${Browser}`);
// console.log(logo);
if (logo != "") {
    logo.style.opacity = 1;
}