import axios from 'axios';

export const getRandomCharacters = async (count = 5) => {
  const { data } = await axios.get('https://rickandmortyapi.com/api/character');
  
  // 5 Personajes aleatorios
  const shuffled = data.results.sort(() => 0.5 - Math.random());
  
  // Selecciona los primeros cindo dentro del 'count'
  return shuffled.slice(0, count);
};