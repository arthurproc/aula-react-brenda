import React from "react"
import Question from "./components/question";

const questions = [
  "Na casa em que você vive com sua família, nos cômodos em que a luzes ficam acesas por mais de 4 horas, as lâmpadas são econômicas (led)?",
  "Quando você toma banho, você demora mais do que 10 minutos?",
  "Você deixa a torneira aberta ao escovar os dentes?",
  "Na casa ou prédio em que você vive com sua família, a calçada é limpa com vassoura ao invés de água?",
  "Você e sua família dão preferência às frutas e verduras da estação?",
  "Você e sua família consomem produtos orgânicos?",
  "Você e sua família fazem a separação dos materiais recicláveis?",
  "Quando fazem compras, você e sua família dão preferência a materiais com embalagens recicláveis?",
  "Quando você não está usando aparelhos eletrônicos você os desliga?",
  "Você costuma utilizar o verso das folhas de papéis já utilizadas?",
];

export default function App() {
  return (
    <>
      <h1>Perguntas</h1>
      {
        questions.map((question) => <Question key={question} pergunta={question} />)
      }
    </>
  );
}
