const darkModeButton = document.getElementById("darkModeButton");
darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark_mode");
});

// AB HIER TEILNEHMERLISTE
// Variablen benennen UND deklarieren
let hinzufügen = document.getElementById("btnAdd");
let rückgängig = document.getElementById("btnDelete");
let inputName = document.getElementById("inputName");
let liste = document.getElementById("list");
let numberUsers = document.getElementById("numberUsers");
// leeres Array
users = [];

// Funktionen erstellen ADD
// Namen untereinander in der Liste ausgeben + Anzahl Users
function add() {
  console.log(inputName.value);
  users.push(inputName.value);
  console.log(users);
  liste.innerHTML = `<li> ${users.join("</li><li>")} </li>`;
  inputName.value = "";
  numberUsers.innerHTML = users.length;
  console.log(users.length);
}

function sub() {
  users.pop();
  console.log(users);
  liste.innerHTML = users;
  numberUsers.innerHTML = users.length;
}
if (users.length != 0) {
  liste.innerHTML = `<li> ${users.join("</li><li>")} </li>`;
} else {
  liste.innerHTML = "";
}
