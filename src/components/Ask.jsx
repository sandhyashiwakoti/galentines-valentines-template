import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const Ask = ({ setPage }) => {
  const [noBtnStyle, setNoBtnStyle] = useState({});
  const [noBtnText, setNoBtnText] = useState("No");

  const noTexts = [
    "Are you sure? 🤨",
    "100% sure??",
    "Think again! 🧐",
    "Really? 😢",
    "Please reconsider!",
    "Don't do this! 💔",
    "I'm literally crying rn 😭",
    "Come on! 🥺",
    "Just click YES!",
    "Error: No button broken! ❌",
    "Click YES already!!",
    "You're making me sad 💔",
    "Wait, let's rethink this...",
    "Is that your final answer?",
    "Please? 🙏",
    "Are you really gonna do this to me?",
    "Nope. Try again. ✋",
    "Think about all our memories!",
    "You know you want to say yes! 😤"
  ];

  const moveButton = () => {
    const randomIndex = Math.floor(Math.random() * noTexts.length);
    setNoBtnText(noTexts[randomIndex]);

    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 150);
    
    setNoBtnStyle({ 
      position: 'fixed', 
      left: `${x}px`, 
      top: `${y}px`, 
      zIndex: 9999 
    });
  };

  const handleYes = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff1493', '#ffffff', '#ffb7c5']
    });
    setPage('success');
  };

  return (
    <>
      <h1>Will you be my Galentine?</h1>
      <p>You can't say no. I tried to warn you. 😏</p>
      <div className="gif-container">
          <img 
            src="/sad-cat.gif" 
            alt="Sad Cat" 
            className="internal-gif" 
          />
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px', minHeight: '60px' }}>
        <button className="btn-primary" onClick={handleYes}>
            YES! 😍
        </button>

        <button 
          className="btn-no" 
          style={noBtnStyle} 
          onMouseEnter={moveButton}
          onClick={moveButton}
        >
          {noBtnText}
        </button>
      </div>
    </>
  );
};

export default Ask;