const inicioPistas = new Date("2025-07-01T00:00:00");
const finPistas = new Date("2025-07-17T23:59:59");
const countdownEl = document.getElementById("countdown");
const pistaEl = document.getElementById("pista");

const pistas = {
  "2025-07-01": "No voy a hacertela facil al principio, asique solo por ahora te puedo decir que esta web en si, es la primera pista.",
  "2025-07-02": "Segunda pista: Me gusta el mate amargo 🧉",
  "2025-07-03": "Muy bien martincho! La pista extra es: Andar en bici no es lo mio",
  "2025-07-04": "Hola Marisol, no te puedo dar pistas porque no tengo idea a quien le tocaste :(",
  "2025-07-05": "Hoy es sabado, no hay pista, pero mañana si.",
  "2025-07-06": "Hoy domingo veras la pista? Lo dudo asique tiro una importante: No soy de rrhh",
  "2025-07-07": "Leiste la pista de ayer? La repito por las dudas, la de ayer decia: No soy ... ",
  "2025-07-08": "Octava pista: Soy Hombre",
  "2025-07-09": "Se suspenden las pistas por hoy por ser feriado",
  "2025-07-10": "Por si no entendiste la primera pista, esta paginita la hice yo, me gusta programar",
  "2025-07-11": "Pista 11: Si quisiera podria ponerle mas onda a esta pagina",
  "2025-07-12": "Pista 12: Por lo general, aparezco los martes y los jueves",
  "2025-07-13": "Pista 13: Hoy no hay pista, solo aviso que sabado y domingo hay dos importantes",
  "2025-07-14": "Pista 14: No soy de Arquitectura",
  "2025-07-15": "Aguante River",
  "2025-07-16": "Pista 16: Dicen que mi viejo es una paloma",
  "2025-07-17": "Última pista: Me gusta la cena, sobretodo la última"
};

function mostrarPistaYContador() {
  const ahora = new Date();
  const yyyy_mm_dd = ahora.toISOString().split("T")[0];

  // Mostrar pista del día
  if (yyyy_mm_dd in pistas) {
    pistaEl.textContent = pistas[yyyy_mm_dd];
    pistaEl.classList.remove("hidden");
  } else if (ahora > finPistas) {
    pistaEl.textContent = "¡Se han revelado todas las pistas! 🎉";
    pistaEl.classList.remove("hidden");
    countdownEl.classList.add("hidden");
    return;
  } else {
    pistaEl.textContent = "Aún no hay pista disponible ⏳";
    pistaEl.classList.remove("hidden");
  }

  // Calcular fecha de la próxima pista (mañana a las 00:00)
  let proximoDia = new Date(ahora);
  proximoDia.setDate(proximoDia.getDate() + 1);
  proximoDia.setHours(0, 0, 0, 0);

  if (proximoDia <= finPistas) {
    actualizarCuentaRegresiva(proximoDia);
    setInterval(() => actualizarCuentaRegresiva(proximoDia), 1000);
  } else {
    countdownEl.classList.add("hidden");
  }
}

function actualizarCuentaRegresiva(destino) {
  const ahora = new Date();
  const diferencia = destino - ahora;

  if (diferencia <= 0) {
    countdownEl.textContent = "¡Nueva pista disponible!";
    return;
  }

  const horas = Math.floor(diferencia / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  countdownEl.textContent = `Próxima pista en ${horas}h ${minutos}m ${segundos}s`;
}

// Ejecutar
mostrarPistaYContador();
