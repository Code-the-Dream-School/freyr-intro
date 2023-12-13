const today = new Date('December 12, 2023, 5:05:00');

var thisYear = today.getFullYear();
const footer = document.querySelector("#footer");
var copyright = document.createElement("p");

let copyright = document.getElementById(thisYear).innerHTML;
footer.appendChild(copyright);


