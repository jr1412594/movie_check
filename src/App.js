import './App.css';
import React, { useState, useEffect } from 'react';
import TvContainer from './components/TvContainer';
import Search from './components/Search';

const baseUrl = 'https://api.tvmaze.com/shows'

function App() {

  const [tvShows, setTvShows] = useState([]);
  const [search, setSearch] = useState('')


  useEffect(() => {
    fetch(baseUrl)
    .then(response => response.json())
    .then(result => setTvShows(result))
  }, [])

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const filteredTvShows = () => {
    return tvShows.filter(tvshow => {
      if (!search) {
        return true
      } else {
        return tvshow.name.toLowerCase().includes(search.toLowerCase())
      }
    })
  }

  return (
    <div className="App">
      <h1>I love you Karina!</h1>
      <Search handleChange={ handleChange }search={ search }/>
      {/* <TvContainer tvShows={ tvShows }/> */}
      <TvContainer tvShows={ filteredTvShows() }/>
    </div>
  );
}

export default App;
