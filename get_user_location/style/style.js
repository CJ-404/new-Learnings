let hidden_div = document.querySelector(".location");
let header = document.querySelector("h1");

document.querySelector(".wrapper").addEventListener("click", function() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        hidden_div.innerHTML = "The Browser Does not Support";
    }

    let hidden_dclass = hidden_div.classList;

    if (hidden_dclass.contains("hidden")) {
        hidden_dclass.remove("hidden");
        header.classList.add("hidden");
    } else {
        hidden_dclass.add("hidden");
        header.classList.remove("hidden");

    }
})

function showPosition(position) {
    console.log(position);
    let { latitude, longitude } = position.coords;
    // hidden_div.innerHTML = "Your Location is : " + position.coords.latitude + "<br>Longitude : " + position.coords.longitude;
    // https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=YOUR-API-KEY
}

function showError(error) {
    if (error.code == 1) {
        hidden_div.innerHTML = "The User have denied the request for get Location.";
    } else if (error.code == 2) {
        hidden_div.innerHTML = "Location not available.";
    } else {
        hidden_div.innerHTML = "Something went wrong";
    }
}