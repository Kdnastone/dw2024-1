import React from 'react';

const CharacterDescr = ({ character }) => {
  return (
    <div className="characterDescr">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>Estado: {character.status}</p>
      <p>Especie: {character.species}</p>
      <p>Género: {character.gender}</p>
    </div>
  );
};

export default CharacterDescr;