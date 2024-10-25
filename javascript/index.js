let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let LosAngelesTime = moment();
losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
  "h:mm:ss"
)} <small>${losAngelesTime.format("A")}</small>`;
