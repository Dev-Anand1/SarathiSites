// src/components/TypeWriter.js
import React, { useState, useEffect } from 'react';

const TypeWriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayText((prevText) => prevText + text[index]);
      setIndex((prevIndex) => (prevIndex === text.length - 1 ? 0 : prevIndex + 1));
    }, 100);

    return () => clearTimeout(timer);
  }, [displayText, index, text]);

  return <div className="TypeWriter">{displayText}</div>;
};

export default TypeWriter;
