import React, { useState, useEffect } from 'react';
import { getRandomCharacters } from '../services/api.js';
import CharacterList from '../components/organisms/ChatacterList.jsx';
import Button from '../components/atoms/Button.jsx';

const Home = () => {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const randomCharacters = await getRandomCharacters();
    console.log('Nuevos personajes obtenidos:', randomCharacters);
    setCharacters(randomCharacters);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className="home">
      <h1>Rick and Morty - Cinco Personajes al azar</h1>
      <CharacterList characters={characters} />
      <Button text="Actualizar imágenes" onClick={fetchCharacters} />
    </div>
  );
};

export default Home;