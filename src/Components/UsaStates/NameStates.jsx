import React, { useEffect, useState } from "react";
import "./NameStates.css";
import States from "./States";

const NameStates = () => {
  const [answer, setAnswer] = useState("");
  const [stateCount, setStateCount] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [givenUp, setGivenUp] = useState(false);

  useEffect(() => {
    States.forEach((state) => {
      if (
        state.toLowerCase() === answer.toLowerCase() &&
        !correctAnswers.some(
          (correctState) => correctState.toLowerCase() === state.toLowerCase()
        )
      ) {
        setStateCount((count) => count + 1);
        setCorrectAnswers((answers) => {
          const newAnswers = [...answers];
          const newState = States.find(
            (s) => s.toLowerCase() === state.toLowerCase()
          );
          newAnswers.push(newState);
          if (newAnswers.length === 50 && !givenUp) {
            newAnswers.push("\n\nCongratulations, you named all 50 US States!");
          }
          return newAnswers;
        });
        setAnswer("");
      }
    });
  }, [answer]);
  function handleClick() {
    setAnswer("");
    setStateCount(0);
    setCorrectAnswers([]);
  }

  function handleClickGiveUp() {
    setGivenUp(true);
    States.forEach((state) => {
      if (!correctAnswers.includes(state)) {
        setCorrectAnswers((answers) => {
          const newAnswers = [...answers];
          newAnswers.push(state);
          return newAnswers;
        });
      }
    });
  }

    return (
      <div>
        <button className="t3button" onClick={handleClick}>
          Restart
        </button>
        <label htmlFor="answerInput">Guess US States</label>
        <br />
        <br />
        <input
          id="answerInput"
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="let see if you know all 50 states"
        />
        <br />
        <br />
        <p>total:{stateCount} / 50</p>
        <textarea
          cols="100"
          rows="10"
          value={correctAnswers.join(", ")}
          placeholder="Your correct answers"
          disabled
        />
        <br></br>
        <button className="t3button" onClick={handleClickGiveUp}>Give Up</button>
      </div>
    );
  }


export default NameStates;
