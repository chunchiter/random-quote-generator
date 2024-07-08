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
          <a 
          href={`https://x.com/intent/tweet?=text=${quotes.text}`}
          target='blank'
          rel='noopener noreferrer'
          className="btn">
          Tweet
          </a>

          <a 
          href={`https://www.instagram.com`}
          target='blank'
          rel='noopener noreferrer'
          className="btn">
          Instagram
          </a>

          <a 
         href={`https://www.threads.net/share?text=${quotes.text}`}
          target='blank'
          rel='noopener noreferrer'
          className="btn">
          Theards
          </a>
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
