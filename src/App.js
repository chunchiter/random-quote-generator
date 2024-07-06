import React,{useEffect, useState} from 'react';
import './App.css';

const App = () =>{
  const[quotes, setQuotes] = useState('');

  const getQuotes = () => {
    fetch("https://waifu-it.p.rapidapi.com/waifu?name=Asuna%20Yuuki&anime=Sword%20Art%20Online")
    .then((res) => res.json())
    .then((data) => {
      let randomNum = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNum]);
    });
  };
  
  useEffect(() => {
    getQuotes();
  }, []);

  return(
    <div className="App"> 
        <div className="quotes">
        <p>{quotes.text}</p>
        <p>{quotes.author}</p>
          <div className='btnContainer'>
            <button onClick={getQuotes}>Get Quotes</button>
            <a href='' className='btn'>Tweet</a>
            <a href='' className='btn'>Instagram</a>
            <a href='' className='btn'>Threads</a>
          </div>
        </div>
    </div>
  );
};

export default App;
