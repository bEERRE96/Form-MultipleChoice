const boton = document.querySelector("#enviar-form");

const preguntas = [
  {
    respuestas: document.getElementsByName("pregunta1"),
    respuestaCorrecta: "Correcta",
    retroalimentacionPositiva: document.getElementById("respuesta-correcta1"),
    retroalimentacionNegativa: document.getElementById("respuesta-incorrecta1"),
  },
  {
    respuestas: document.getElementsByName("pregunta2"),
    respuestaCorrecta: "Correcta",
    retroalimentacionPositiva: document.getElementById("respuesta-correcta2"),
    retroalimentacionNegativa: document.getElementById("respuesta-incorrecta2"),
  },
  {
    respuestas: document.getElementsByName("pregunta3"),
    respuestaCorrecta: "Correcta",
    retroalimentacionPositiva: document.getElementById("respuesta-correcta3"),
    retroalimentacionNegativa: document.getElementById("respuesta-incorrecta3"),
  },
  {
    respuestas: document.getElementsByName("pregunta4"),
    respuestaCorrecta: "Correcta",
    retroalimentacionPositiva: document.getElementById("respuesta-correcta4"),
    retroalimentacionNegativa: document.getElementById("respuesta-incorrecta4"),
  },
  {
    respuestas: document.getElementsByName("pregunta5"),
    respuestaCorrecta: "Correcta",
    retroalimentacionPositiva: document.getElementById("respuesta-correcta5"),
    retroalimentacionNegativa: document.getElementById("respuesta-incorrecta5"),
  },
{
  respuestas: document.getElementsByName("pregunta6"),
  respuestaCorrecta: "Correcta",
  retroalimentacionPositiva: document.getElementById("respuesta-correcta6"),
  retroalimentacionNegativa: document.getElementById("respuesta-incorrecta6"),
},
{
  respuestas: document.getElementsByName("pregunta7"),
  respuestaCorrecta: "Correcta",
  retroalimentacionPositiva: document.getElementById("respuesta-correcta7"),
  retroalimentacionNegativa: document.getElementById("respuesta-incorrecta7"),
},
{
  respuestas: document.getElementsByName("pregunta8"),
  respuestaCorrecta: "Correcta",
  retroalimentacionPositiva: document.getElementById("respuesta-correcta8"),
  retroalimentacionNegativa: document.getElementById("respuesta-incorrecta8"),
},
{
  respuestas: document.getElementsByName("pregunta9"),
  respuestaCorrecta: "Correcta",
  retroalimentacionPositiva: document.getElementById("respuesta-correcta9"),
  retroalimentacionNegativa: document.getElementById("respuesta-incorrecta9"),
}
];

boton.addEventListener("click", (event) => {
  event.preventDefault();

  let respuestasCorrectas = 0;

  preguntas.forEach((pregunta) => {
    let respuestaCorrectaEncontrada = false;

    pregunta.respuestas.forEach((respuesta) => {
      if (respuesta.checked && respuesta.value === pregunta.respuestaCorrecta) {
        respuestaCorrectaEncontrada = true;
        pregunta.retroalimentacionPositiva.style.display = "block";
        respuestasCorrectas++;
      }
    });

    if (!respuestaCorrectaEncontrada) {
      pregunta.retroalimentacionNegativa.style.display = "block";
    }
  });

  alert(`Has acertado ${respuestasCorrectas} preguntas`);
});