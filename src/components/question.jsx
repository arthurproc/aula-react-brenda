import React, { useState } from 'react'

// Componente React
function Question(propriedades) {
  const [answer, setAnswer] = useState("");

  return (
    <div>
      <p>
        <strong>
          {propriedades.pergunta}
        </strong>
      </p>
      <label htmlFor="yes-answer">
        Sim
        <input
          type="radio"
          value="sim"
          id="yes-answer"
          onChange={(event) => setAnswer(event.target.value)}
          checked={answer === "sim"}
        />
      </label>
      <p></p>
      <label htmlFor="no-answer">
        Não
        <input
          type="radio"
          value="nao"
          id="no-answer"
          onChange={(event) => setAnswer(event.target.value)}
          checked={answer === "nao"}
        />
      </label>
    </div>
  );
}

export default Question