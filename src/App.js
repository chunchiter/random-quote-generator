import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [quotes, setQuotes] = useState('');
  const [author, setAuthor] = useState('');

  const getQuotes = () => {
    fetch("https://type.fit/api/quotes")
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex];
        setQuotes(randomQuote.text);
        setAuthor(randomQuote.author);
      })
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div className="App">
      <div className="quotes">
        <div className="btnContainer">
          <button onClick={getQuotes}>Get Quotes</button>
          <a href="" className="btn">Tweet</a>
          <a href="" className="btn">Instagram</a>
          <a href="" className="btn">Threads</a>
        </div>
        {quotes && (
          <div className="quote">
            <p>{quotes}</p>
            <p><strong>{author}</strong></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
