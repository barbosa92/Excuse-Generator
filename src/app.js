/* eslint-disable */
import "./style.css";

let generateExcuse = () => {
  let pronoun = ["Un"];
  let subject = ["runner", "perro", "payaso", "jigglypuff"];
  let action = [
    "me ha quitado",
    "se ha comido",
    "se ha llevado",
    "se ha ido volando en mi"
  ];
  let possesion = ["portatil", "bicicleta", "cuaderno", "movil"];
  let where = ["en el parque", "durante el partido", "en el instituto"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possesionIndex = Math.floor(Math.random() * possesion.length);
  let whereIndex = Math.floor(Math.random() * where.length);
  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possesion[possesionIndex] +
    " " +
    where[whereIndex]
  );
};

window.onload = () => {
  let randomNumber = Math.random() * 10;
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excusa").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console!" + randomNumber);
};
