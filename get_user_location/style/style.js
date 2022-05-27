let hidden_div = document.querySelector("h1");
let hidden_dclass = hidden_div.classList;
var key = API_KEY;


document.querySelector(".wrapper").addEventListener("click", function() {

    if (!hidden_dclass.contains("hidden")) {
        if (navigator.geolocation) {
            hidden_div.innerHTML = "Allow to detect Location";
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            hidden_div.innerHTML = "The Browser Does not Support";
        }
    }

    if (!hidden_dclass.contains("hidden")) {
        hidden_dclass.add("hidden");
    } else {
        hidden_dclass.remove("hidden");
        hidden_div.innerHTML = "Click To Find Your Location";
    }
})

function showPosition(position) {
    hidden_div.innerHTML = "Detecting your Location . . ."
        // console.log(position);
    let { latitude, longitude } = position.coords;
    // hidden_div.innerHTML = "Your Location is : " + position.coords.latitude + "<br>Longitude : " + position.coords.longitude;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`)
        .then(response => response.json()).then(result => {
            let AllDetails = result.results[0].components;
            // console.log(AllDetails);
            let { city, continent, road, state, postcode, country } = AllDetails;
            // console.log(city, continent, road, state, postcode, country);
            hidden_div.innerHTML = "<i><strong>Your Location is :</strong></i> <br><br>Road :" + road + "<br>City :" + city + "<br>postcode :" + postcode + "<br>state :" + state + "<br>country :" + country + "<br>Continent :" + continent;
            // console.table(AllDetails);
        }).catch(() => { //if any error occured
            hidden_div.innerHTML = "Something went wrong";
        })
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