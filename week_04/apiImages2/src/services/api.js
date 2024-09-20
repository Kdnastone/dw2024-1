/*Con Axios
import axios from 'axios';

export const getRandomCharacters = async (count = 5) => {
  try {
    const { data } = await axios.get('https://rickandmortyapi.com/api/character');
    
    // 5 Personajes aleatorios
    //https://medium.com/@priyanshuahir01/const-shuffledarray-gamearray-sort-math-random-0-5-3f0f30bb38ba
    const shuffled = data.results.sort(() => Math.random() - 0.5);
    
    // Selecciona los primeros cindo dentro del 'count'
    return shuffled.slice(0, count);
  } catch (error) {
    console.error('Error fetching characters:', error);
    return [];
  }
};*/

// Con Fetch Sin Axios
export const getRandomCharacters = async (count = 5) => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    // 5 Personajes aleatorios
    const shuffled = data.results.sort(() => Math.random() - 0.5);

    // Selecciona los primeros cinco dentro del 'count'
    return shuffled.slice(0, count);
  } catch (error) {
    console.error('Error fetching characters:', error);
    return [];
  }
};

