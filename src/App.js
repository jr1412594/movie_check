import './App.css';
import React, { useState, useEffect } from 'react';
import TvContainer from './components/TvContainer';

const baseUrl = 'https://api.tvmaze.com/shows'

function App() {

  const [tvShows, setTvShows] = useState([]);


  useEffect(() => {
    fetch(baseUrl)
    .then(response => response.json())
    .then(result => setTvShows(result))
  }, [])

  return (
    <div className="App">
      <h1>I love you Karina!</h1>
      <TvContainer tvShows={ tvShows }/>
    </div>
  );
}

export default App;
