import React, { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Memories from './components/Memories';
import Ask from './components/Ask';
import Success from './components/Success';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [page, setPage] = useState('welcome');

  const createHearts = () => {
    const hearts = [];
    for (let i = 0; i < 40; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        fontSize: `${Math.random() * 20 + 10}px`,
        '--duration': `${Math.random() * 3 + 2}s`,
        animationDelay: `${Math.random() * 2}s`
      };
      hearts.push(<div key={i} className="heart-particle" style={style}>❤</div>);
    }
    return hearts;
  };

  return (
    <div className="App">
      <div className="heart-bg">{createHearts()}</div>

      <div className="container">
        <img src="/peeking-cat.png" alt="Cat" className="peeking-cat" />
        
        <div className="card">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {page === 'welcome' && <Welcome setPage={setPage} />}
              {page === 'memories' && <Memories setPage={setPage} />}
              {page === 'ask' && <Ask setPage={setPage} />}
              {page === 'success' && <Success />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;