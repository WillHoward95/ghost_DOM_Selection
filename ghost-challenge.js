/************
 * N.B. The ghosts are SVGs, so it's 'fill', not 'color' you need to change
 *************/

// GET BY ID
const first_ghost = document.getElementById("first_ghost");
first_ghost.style.fill = "orange";
// GET BY CLASSNAME
const second_wave = document.getElementsByClassName("second_wave");

for (element of second_wave) {
  element.style.fill = "blue";
}

// GET AREA, DRILL DOWN using GET BY TAG NAME
const areaFiftyOneSVGs = document
  .getElementById("area-51")
  .getElementsByTagName("svg");

for (element of areaFiftyOneSVGs) {
  element.style.fill = "green";
}

// querySelector nth-child
const penultimateGhost = document.querySelector("#area-51 svg:nth-child(4)");

penultimateGhost.style.fill = "red";

// from the last child, select the div immediately above the ghost and make its border '5px dashed'
const areaFiftyOne = penultimateGhost.parentNode;
areaFiftyOne.style.border = "5px dashed";

// querySelectorAll
const areaFiftySVGs = document.querySelectorAll("#area-50 svg");

for (element of areaFiftySVGs) {
  element.style.fill = "red";
}
