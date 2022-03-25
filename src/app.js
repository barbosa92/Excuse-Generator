/* eslint-disable */
import "./style.css";

let generadorExcusas = () => {
  let pronombre = ["Un"];
  let sujeto = ["runner", "perro", "payaso", "jigglypuff", "fantasma"];
  let accion = [
    "me ha quitado",
    "se ha comido",
    "se ha llevado",
    "se ha ido volando en "
  ];
  let objeto = ["mi portatil", "la bicicleta", "el cuaderno", "tu movil"];
  let lugar = ["en el parque", "durante el partido", "en el instituto"];

  let pronombreIndex = Math.floor(Math.random() * pronombre.length);
  let sujetoIndex = Math.floor(Math.random() * sujeto.length);
  let accionIndex = Math.floor(Math.random() * accion.length);
  let objetoIndex = Math.floor(Math.random() * objeto.length);
  let lugarIndex = Math.floor(Math.random() * lugar.length);
  return (
    pronombre[pronombreIndex] +
    " " +
    sujeto[sujetoIndex] +
    " " +
    accion[accionIndex] +
    " " +
    objeto[objetoIndex] +
    " " +
    lugar[lugarIndex]
  );
};

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excusa").innerHTML = generadorExcusas();
  });
};
