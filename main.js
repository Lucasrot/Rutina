const rutinaRealizada = [];

function rutina(calentamiento, fuerza, flexibilidad) {
  const ejercicios = {
    calentamiento: calentamiento,
    fuerza: fuerza,
    flexibilidad: flexibilidad,
  };
  rutinaRealizada.push(ejercicios);
}

function verRutina() {
    for (const ejercicios of rutinaRealizada) {
      alert(
        "Tu rutina de calentamiento es: " +
          ejercicios.calentamiento +
          " minutos, tu rutina de fuerza es " +
          ejercicios.fuerza +
          " series, y tu rutina de flexibilidad es " +
          ejercicios.flexibilidad +
          " minutos."
      );
    }
  }



  function empezarRutina() {
    let empezarRutina = confirm("¿Quieres realizar una rutina de entrenamiento?");
    while (empezarRutina) {
      const empezar = prompt("Ingresar acción (crear, ver series)");
      if (empezar === "crear") {
        const calentamiento = prompt("¿Cuántos minutos de calentamiento quieres hacer?");
        if (calentamiento > 20) {
          alert("No se puede realizar una rutina de calentamiento de más de 20 minutos");
        }
        const fuerza = prompt("¿Cuántas series de fuerza quieres hacer?");
        if (fuerza > 7) {
          alert("No se puede realizar una rutina de fuerza de más de 7 series");
        }
        const flexibilidad = prompt("¿Cuántos minutos de flexibilidad quieres hacer?");
        if (flexibilidad > 20) {
          alert("No se puede realizar una rutina de flexibilidad de más de 20 minutos");
        }
        rutina(calentamiento, fuerza, flexibilidad);
      } else if (empezar === "ver series") {
        verRutina();
      } else {
        alert("Acción no válida");
      }
      empezarRutina = confirm("¿Quieres realizar otra rutina o ver las series de entrenamiento?");
    }
    alert("¡Hasta la próxima!");
  }
  
empezarRutina();

