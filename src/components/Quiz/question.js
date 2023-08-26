// import React, { useState } from 'react'

// function Question() {
//     const [selectvalue ,setSelectvalue] = useState([]);
//     const [result , setResult] = useState([]);
//     const handleChange = (e) =>{
//         setSelectvalue(e.target.value);
//     };
//     const handleSubmit = (e) =>{
//         e.preventDefault();
//     }

//     // const selectedAnswer = 0;
//     if (selectedAnswer === 'first-answer') {
//     setResult('Correct answer!');
//     } else {
//     setResult('Incorrect answer!');
//     }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>What is the output of the following code snippet?</div>
//         <div>
//           <div>
//             <input
//               type="radio"
//               name="answer"
//               value="first-answer"
//               checked={selectedAnswer === 'first-answer'}
//               onChange={handleChange}
//             />
//             a) 4
//           </div>
//           <div>
//             <input
//               type="radio"
//               name="answer"
//               value="second-answer"
//               checked={selectedAnswer === 'second-answer'}
//               onChange={handleChange}
//             />
//             b) 22
//           </div>
//           <div>
//             <input
//               type="radio"
//               name="answer"
//               value="third-answer"
//               checked={selectedAnswer === 'third-answer'}
//               onChange={handleChange}
//             />
//             c) "22"
//           </div>
//           <div>
//             <input
//               type="radio"
//               name="answer"
//               value="fourth-answer"
//               checked={selectedAnswer === 'fourth-answer'}
//               onChange={handleChange}
//             />
//             d) NaN
//           </div>
//         </div>
//         <button type="submit">Submit</button>
//        {result}

//       </form>
//     </div>
//   );
// }
 
// export default Question;

import React, { useState } from 'react';

const DynamicRadioButtons = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const question = 'What is the capital of France?';
  const correctAnswerId = 3; 

  const answers = [
    { id: 1, text: 'Berlin' },
    { id: 2, text: 'Madrid' },
    { id: 3, text: 'Paris' },
    { id: 4, text: 'London' },
    { id: 5, text: 'Rome' },
  ];

  const handleAnswerChange = (event) => {
    setSelectedAnswer(parseInt(event.target.value));
  };

  const checkAnswer = () => {
    setShowResult(true);
  };

  const resetQuiz = () => {
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const isAnswerCorrect = selectedAnswer === correctAnswerId;

  return (
    <div>
      <h2>{question}</h2>
      <form>
        {answers.map((answer) => (
          <div key={answer.id}>
            <label>
              <input
                type="radio"
                name="answer"
                value={answer.id}
                checked={selectedAnswer === answer.id}
                onChange={handleAnswerChange}
              />
              {answer.text}
            </label>
          </div>
        ))}
      </form>
      <button onClick={checkAnswer}>Check Answer</button>
      {showResult && (
        <div>
          {isAnswerCorrect ? (
            <p style={{ color: 'green' }}>Correct! {answers.find((answer) => answer.id === selectedAnswer).text} is the capital of France.</p>
          ) : (
            <p style={{ color: 'red' }}>Incorrect! Try again.</p>
          )}
          <button onClick={resetQuiz}>Reset Quiz</button>
        </div>
      )}
    </div>
  );
};

export default DynamicRadioButtons;
