import React from 'react';

const Success = () => {
  return (
    <>
      <h1>Yayyy!🥂</h1>
      <div className="gif-container">
          <img src="love-cat.gif" alt="Love Cat" className="internal-gif" />
      </div>
      <p style={{ fontStyle: 'italic', color: '#ff69b4' }}> (A virtual kiss) </p>
      <p>Miss you. See you soon! ❤️</p>
    </>
  );
};

export default Success;