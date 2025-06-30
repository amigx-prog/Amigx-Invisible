const inicioPistas = new Date("2025-07-01T00:00:00");
const finPistas = new Date("2025-07-17T23:59:59");
const countdownEl = document.getElementById("countdown");
const pistaEl = document.getElementById("pista");

const pistas = {
  "2025-07-01": "No voy a hacertela facil al principio, asique solo por ahora te puedo decir que esta web en si, es la primera pista.",
  "2025-07-02": "Segunda pista: Me gusta el mate amargo 🧉",
  "2025-07-03": "Tercera pista: Uso lentes",
  "2025-07-04": "Cuarta pista: Casi siempre estoy escuchando musica",
  "2025-07-05": "Quinta pista: Hoy es sabado, lindo para hacer un asado al medio dia",
  "2025-07-06": "Hoy domingo veras la pista? Lo dudo asique tiro una importante: No soy de rrhh",
  "2025-07-07": "Leiste la pista de ayer? La repito por las dudas, la de ayer decia: No soy ... ",
  "2025-07-08": "Octava pista: Soy Hombre",
  "2025-07-09": "Se suspenden las pistas por hoy por ser feriado",
  "2025-07-10": "Por si no entendiste la primera pista, me gusta programar",
  "2025-07-11": "Pista 11: Si quisiera podria ponerle mas onda a esta pagina",
  "2025-07-12": "Pista 12: Por lo general, aparezco los martes y los jueves",
  "2025-07-13": "Pista 13: Hoy no hay pista, solo aviso que sabado y domingo hay dos importantes",
  "2025-07-14": "Pista 14: No soy de Arquitectura",
  "2025-07-15": "Aguante River",
  "2025-07-16": "Pista 16: Dicen que mi viejo es una paloma",
  "2025-07-17": "Última pista: Me gusta la cena, sobretodo la última"
};

function mostrarCuentaRegresiva() {
  const ahora = new Date();
  const diferencia = inicioPistas - ahora;

  if (diferencia <= 0) {
    countdownEl.classList.add("hidden");
    mostrarPista();
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  countdownEl.textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

function mostrarPista() {
  const hoy = new Date();
  const yyyy_mm_dd = hoy.toISOString().split("T")[0];

  if (hoy >= inicioPistas && hoy <= finPistas && pistas[yyyy_mm_dd]) {
    pistaEl.textContent = pistas[yyyy_mm_dd];
    pistaEl.classList.remove("hidden");
  } else if (hoy > finPistas) {
    pistaEl.textContent = "¡Se han revelado todas las pistas! 🎉";
    pistaEl.classList.remove("hidden");
  } else {
    pistaEl.textContent = "Esperá a que se libere la pista de hoy... ⏳";
    pistaEl.classList.remove("hidden");
  }
}

const ahora = new Date();
if (ahora < inicioPistas) {
  mostrarCuentaRegresiva();
  setInterval(mostrarCuentaRegresiva, 1000);
} else {
  mostrarPista();
}