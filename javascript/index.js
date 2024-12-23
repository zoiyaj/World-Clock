function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisTime.format("MMMM Do, YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}

function updateCity(event) {
  let locationTimeZone = event.target.value;
  if (locationTimeZone === "current") {
    locationTimeZone = moment.tz.guess();
  }
  let cityTime = moment().tz(locationTimeZone);
  let cityName = locationTimeZone.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#location");
  citiesElement.innerHTML = `
</br>
      <div class="city">
      <div>
<h2>${cityName}</h2>
<div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}
        </small></div>
    </div>
    </br>
   `;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#citySelector");

citiesSelectElement.addEventListener("change", updateCity);
