import React from 'react';

const Welcome = ({ setPage }) => {
  return (
    <>
      <h1>Hey Love! 💖</h1>
      <p style={{ fontSize: '1.3rem', margin: '20px 0' }}>
        I made a little something for you...
      </p>
      <button className="btn-primary" onClick={() => setPage('memories')}>
        Open It 🤍
      </button>
    </>
  );
};

export default Welcome;