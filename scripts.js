const pregunta = {
    titulo: '¿A quién ha doblado más veces Constantino Romero?',
    respuestas: [
        {
            label: "Clint Eastwood",
            id: "clint-eastwood",
            name: "actor",
            value: "clint-eastwood"
        },
        {
            label: "James Earl",
            id: "james-earl",
            name: "actor",
            value: "james-earl"
        },
        {
            label: "Roger Moore",
            id: "roger-moore",
            name: "actor",
            value: "roger-moore"
        },
        {
            label: "William Shatner",
            id: "william-shatner",
            name: "actor",
            value: "william-shatner"
        },
        {
            label: "Arnold Schwarzenegger",
            id: "arnold-schwarzenegger",
            name: "actor",
            value: "arnold-schwarzenegger"
        }
    ]
}

function imprimePregunta(pregunta) {
  let newHTML = "";

  newHTML += imprimeTitulo(pregunta);
  newHTML += imprimeTodasLasRespuestas(pregunta);

  return newHTML;
}

function imprimeTitulo(pregunta) {
  return '<p>' + pregunta.titulo + '</p>'
}

function imprimeTodasLasRespuestas(pregunta) {
  imprimeUnaRespuesta(pregunta)
}

function imprimeUnaRespuesta(respuesta) {
  
}

function imprimeLabel(respuesta) {
  return '<label for = ' + pregunta.respuesta.id(respuesta) + '>' + pregunta.respuestas.label(respuesta) + '</label>'
}

function imprimeInput(respuesta) {
  return '<input type=radio id =' + pregunta.respuestas.id(respuesta) + ' name =' + pregunta.respuestas.name(respuesta) + ' value = ' + pregunta.respuestas.value + '>'
}

document.getElementById("contenedorPreguntas").innerHTML = imprimePregunta(pregunta);