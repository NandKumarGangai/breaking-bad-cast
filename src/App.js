import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import Casts from './components/Casts';
import Spinner from './components/spinner';
import Footer from './components/footer';
import './App.css';

const App = () => {
  const [casts, setCasts] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const getCastDetails = async () => {
      const res = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      setCasts(res.data);
      setIsLoading(false);
    }
    getCastDetails();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      
    </div>
  );
}

export default App;
