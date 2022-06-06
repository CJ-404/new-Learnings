window.onload = screen;
window.onresize = screen;

function screenToDevice(width) {
    if (width < 200) {
        return "Hey Developer";
    } else if (width < 500) {
        return "Mobile  Device";
    } else if (width < 900) {
        return "Tablet  Device";
    } else if (width < 1600) {
        return "Laptop  Device";
    } else if (width < 2000) {
        return "Desktop  Device";
    } else {
        return "WTF YOU HAVE? Give me";
    }
}

function screen() {
    let width = window.innerWidth;
    // console.log(width);
    document.querySelector(".size").innerHTML = "WIDTH : " + width;
    document.querySelector(".device").innerHTML = screenToDevice(width);
}