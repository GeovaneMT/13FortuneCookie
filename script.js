// Variables
const btnCrack = document.getElementById("btnCrack");
const btnReset = document.getElementById("btnReset");

const intro = document.getElementById("intro");
const message = document.getElementById("message");

const messageElement = document.getElementById("message");

// Array of phrases
const frasesBiscoitoSorte = [
  "Acredite em si mesmo e conquiste o impossível.",
  "O sucesso está sempre ao alcance daqueles que persistem.",
  "Aprenda com os erros do passado para construir um futuro brilhante.",
  "Seja a mudança que você deseja ver no mundo.",
  "O sorriso é a chave para abrir as portas da felicidade.",
  "O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta.",
  "Seus sonhos estão ao seu alcance - continue persistindo.",
  "Um sorriso é o primeiro passo para a felicidade.",
  "A melhor maneira de prever o futuro é criá-lo.",
  "Seus talentos brilharão quando você os permitir.",
  "Grandes coisas nunca surgiram das zonas de conforto.",
  "A paciência é uma virtude que traz grandes recompensas.",
  "Acredite em si mesmo, e os outros também acreditarão.",
  "A jornada de mil milhas começa com um único passo.",
  "As oportunidades são como nasceres do sol: se você esperar muito tempo, vai perdê-las.",
  "Aventura espera além da sua zona de conforto.",
  "Sua atitude positiva levará a resultados positivos.",
  "Abrace a mudança e veja novas portas se abrirem.",
  "Sonhe grande e, em seguida, sonhe ainda maior.",
  "A bondade é a chave que abre corações.",
  "A melhor maneira de prever o seu futuro é criá-lo.",
  "O sucesso vem para aqueles que trabalham duro e nunca desistem.",
  "Sua capacidade de se adaptar o levará ao sucesso.",
  "A sabedoria não está nas palavras, está nas ações.",
  "Coisas boas acontecem para aqueles que acreditam."
];

// Copy the array to keep track of shown phrases
let shownPhrases = [...frasesBiscoitoSorte];

// Function1 to toggle the screen
function toggleScreen() {
  intro.classList.toggle("hide");
  message.classList.toggle("hide");
}

// Function2 to set a random phrase
function setRandomPhrase() {
  if (shownPhrases.length === 0) {
    // All phrases have been shown, reset the shownPhrases array
    shownPhrases = [...frasesBiscoitoSorte];
  }

  const randomIndex = Math.floor(Math.random() * shownPhrases.length);
  const fraseAleatoria = shownPhrases[randomIndex];

  // Remove the shown phrase from the array
  shownPhrases.splice(randomIndex, 1);

  // Change inner Text of "#message p"
  messageElement.querySelector("p").innerText = fraseAleatoria;
}

// Event listeners
btnCrack.addEventListener('click', toggleScreen);

// Add event listener to btnReset to trigger toggleScreen and setRandomPhrase
btnReset.addEventListener('click', () => {
  toggleScreen();
  setRandomPhrase();
});

// Set initial random phrase
setRandomPhrase();