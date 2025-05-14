//emailjs.init("Y-quNINPcoLnsM10J");

const elements = {
  selector: document.getElementById("selector"),
  nombre: document.getElementById("nombre"),
  usuario: document.getElementById("user"),
  consola: document.getElementById("selector"),
  saga: document.getElementById("saga"),
  favoritos: document.getElementById("favoritos"),
  mostPlayed: document.getElementById("mostPlayed"),
  submit: document.getElementById("submit"),
};

// Lista de consolas
const consolas = [
  "Magnavox Odyssey",
  "Atari Pong",
  "Atari 2600",
  "Atari 2001",
  "Atari 5200",
  "Sega SG-1000",
  "Nintendo NES",
  "Sega Master System",
  "Atari 7800",
  "Sega Mega Drive",
  "Nintendo Game Boy",
  "Super Nintendo",
  "PlayStation",
  "Sega Saturn",
  "Nintendo 64",
  "Sega Dreamcast",
  "Playstation 2",
  "Nintendo Gamecube",
  "Xbox",
  "PSP",
  "Xbox 360",
  "Nintendo Wii",
  "Playstation 3",
  "Playstation 4",
  "Xbox One",
  "Nintendo Switch",
  "Playstation 5",
  "Xbox Series X|S",
].sort();

let url = "https://www.twitch.tv/";

// Audio
const audio = new Audio("./rosco_theme.mp3");
audio.loop = true;
audio.autoplay = true;
//audio.play();

// Llenar el selector
consolas.forEach((nombre) => {
  const option = new Option(nombre, nombre);
  elements.selector.appendChild(option);
});

// Placeholder
elements.favoritos.placeholder = "Introduce un listado";

// Evento de submit
elements.submit.addEventListener("click", (e) => {

  const { nombre, usuario, consola, saga, favoritos, mostPlayed } = elements;

  if (
    !nombre.value ||
    !usuario.value ||
    !consola.value ||
    !saga.value ||
    !mostPlayed.value ||
    !favoritos.value
  ) {
    alert("No has llenado todos los campos");
  }
});

function get_favoritos(input) {
  return input
    .split(",")
    .map((game) => `\n- ${game.trim()}`)
    .join("\n");
}

function sendMail(templateParams) {
  console.log(templateParams);
  emailjs.send("roscacho_mailer", "template_zpnohej", templateParams).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );
}