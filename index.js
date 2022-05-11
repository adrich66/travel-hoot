basePreguntas.sort(() => Math.random() - 0.5);
let index_preg = 0;
let puntaje = 0;
let contador = 0;


cargarPregunta(index_preg);

function cargarPregunta(index) {
  objetoPregunta = basePreguntas[index];

  opciones = [...objetoPregunta.distractores];
  opciones.push(objetoPregunta.respuesta);
  for (let i = 0; i < 3; i++) {
    opciones.sort(() => Math.random() - 0.5);
  }

  document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta;
 
  document.getElementById("imagen").src = objetoPregunta.imagen;
  

  document.getElementById("info").href = objetoPregunta.url;

  document.getElementById("opcion-1").innerHTML = opciones[0];
  document.getElementById("opcion-2").innerHTML = opciones[1];
  document.getElementById("opcion-3").innerHTML = opciones[2];
}

async function seleccionarOpcion(index) {
  let validarRespuesta = opciones[index] == objetoPregunta.respuesta;
  if (validarRespuesta) {
    await Swal.fire({
      title: "Respuesta correcta",
      text: "❤️",
      icon: "success",
    });
    puntaje++;
  } else {
    await Swal.fire({
      title: "Respuesta incorrecta",
      text: `La respuesta correcta es ${objetoPregunta.respuesta}`,
      icon: "error",
    });
  }
  
  index_preg++;
  contador++;

  if (contador == 10) {
    await Swal.fire({
      title: "¡Fin!",
      text: `Puntuación final: ${puntaje}/10 🙂... ok para volver a jugar.`,
    });
    
    basePreguntas.sort(() => Math.random() - 0.5);
    puntaje= 0; 
    contador = 0;
  }
  
  cargarPregunta(index_preg);
}
