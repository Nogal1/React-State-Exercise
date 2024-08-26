import React, { useState } from 'react';
import './EightBall.css'; // Ensure you have a corresponding CSS file for styling

function EightBall({ answers }) {
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  function handleClick() {
    const randomIdx = Math.floor(Math.random() * answers.length);
    setMsg(answers[randomIdx].msg);
    setColor(answers[randomIdx].color);
  }

  return (
    <div className="EightBall" onClick={handleClick} style={{ backgroundColor: color }}>
      <p>{msg}</p>
    </div>
  );
}

export default EightBall;
