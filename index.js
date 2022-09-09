// $(function () {
//     $("button").click(function () {
//       $("img").addClass("open");
//     });
//   });
var entrance = new Audio("audio/entrance.mp3");
var outro = new Audio("audio/outro.mp3");
document.getElementsByClassName("main__contenedor--opciones")[0].style.display = "none";
const map1 = new Map();
map1.set("AD17006", "Alvarez Dominguez, Cristian Rodolfo");
map1.set("AR15068", "Azahar Roldán, Teobaldo Antonio");
map1.set("CC18064", "Cárcamo Carrillo, Karina Michelle");
map1.set("CM19138", "Carrillo Melara, Anderson Guillermo");
map1.set("CH11049", "Cortez Hernández, Wendy Xiomara");
map1.set("MM20191", "Mejía Merino, Rodrigo Javier");
map1.set("ML17017", "Meléndez López, Diana Carolina");
map1.set("MA20025", "Morán Arriola, Luis Enrique");
map1.set("PO16015", "Palacios Ortiz, Leonel Alejandro");
map1.set("PH18005", "Pérez Hernández, Ricardo Alfredo *");

array1 = document.getElementsByClassName("holograma")[0].getElementsByTagName("button");
console.log(array1);
for (let index = 0; index < array1.length; index++) {
  array1.item(index).onclick = function () {
    document.getElementById("holograma").classList.remove("close");
    document.getElementById("holograma").offsetWidth;
    document.getElementById("holograma").classList.add("open");
  };
  array1.item(index).addEventListener("click", showLinks);
}
function showLinks(e) {
  entrance.play();
  for (let index = 0; index < array1.length; index++) {
    array1.item(index).disabled = true;
  }
  setTimeout(function () {
    var carnet = e.target.innerHTML;
    document.getElementById("carnet").textContent = carnet;
    document.getElementById("nombre").textContent = map1.get(carnet);
    var enlaces = document.getElementById("XML--enlaces").children;
    enlaces[0].href = carnet + "/ejercicio4.xml";
    enlaces[1].href = carnet + "/ejercicio5.xml";
    enlaces[2].href = carnet + "/ejercicio6.xml";
    var enlaces = document.getElementById("JSON--enlaces").children;
    enlaces[0].href = carnet + "/ejercicio4.json";
    enlaces[1].href = carnet + "/ejercicio5.json";
    enlaces[2].href = carnet + "/ejercicio6.json";
    var enlaces = document.getElementById("CSS--enlaces").children;
    enlaces[0].href = carnet + "/ejercicio4.css";
    enlaces[1].href = carnet + "/ejercicio5.css";
    enlaces[2].href = carnet + "/ejercicio6.css";
    document.getElementsByClassName("main__contenedor--opciones")[0].removeAttribute("style");
    document.getElementsByClassName("main__contenedor--opciones")[0].classList.add("show-modal");
    // document.getElementsByClassName("main__contenedor--opciones")[0].style.display = "block";
  }, 3500);
}
function closeModal() {
  outro.play();
  document.getElementsByClassName("main__contenedor--opciones")[0].style.display = "none";
  for (let index = 0; index < array1.length; index++) {
    array1.item(index).disabled = false;
  }
  document.getElementById("holograma").classList.remove("open");
  document.getElementById("holograma").offsetWidth;
  document.getElementById("holograma").classList.add("close");
}
// document.getElementsByTagName("button").onclick = function () {
//   alert("HOLA");
// };
// console.log(document.getElementsByTagName("button"));
