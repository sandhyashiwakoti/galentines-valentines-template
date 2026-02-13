import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const memoriesData = [
  {
    id: 1,
    text: "Remember when we first met? That random encounter that turned into something amazing! 💫",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=600&fit=crop"
  },
  {
    id: 2,
    text: "All those late-night conversations and endless laughter. You always know how to make me smile! 😂",
    img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=600&fit=crop"
  },
  {
    id: 3,
    text: "From spontaneous adventures to quiet moments together - every memory with you is special. 🌟",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=600&fit=crop"
  },
  {
    id: 4,
    text: "Coffee dates, food runs, and everything in between. Our friendship is built on good vibes and great food! ☕🍕",
    img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=600&fit=crop"
  },
  {
    id: 5,
    text: "You've been there through thick and thin. Thank you for being my person! 💖",
    img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=600&fit=crop"
  },
  {
    id: 6,
    text: (
      <>
        To my amazing friend - you bring so much joy and light into my life!
        <br /><br />
        Here's to many more memories together! 🎉
      </>
    ),
    img: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=600&h=600&fit=crop"
  },
  {
    id: 7,
    text: (
      <>
        I got you something special... 
        <br /><br />
        🍕🍺🌷
        <br /><br />
        (Virtual gifts because we're both broke but the thought counts, right? 😄)
      </>
    ),
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=600&fit=crop"
  }
];

const Memories = ({ setPage }) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < memoriesData.length - 1) {
      setIndex(index + 1);
    } else {
      setPage('ask');
    }
  };

  return (
    <AnimatePresence mode='wait'>
      <motion.div 
        key={index}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="memory-layout"
      >
        <img src={memoriesData[index].img} alt="memory" className="photo-placeholder" />
        
        <div className="memory-text">
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
            {memoriesData[index].text}
          </p>
          <div style={{ marginTop: '20px' }}>
            <button className="btn-primary" onClick={nextSlide}>
              {index === memoriesData.length - 1 ? "Ready for a question? 🌹" : "Next 💖"}
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Memories;