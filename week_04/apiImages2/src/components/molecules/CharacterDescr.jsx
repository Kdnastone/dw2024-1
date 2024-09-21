import React from 'react';

const CharacterDescr = ({ character }) => {
  return (
    <div className="characterDescr">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>Nombre: {character.name}</p>
      <p>Estado: {character.status}</p>
      <p>Especie: {character.species}</p>
    </div>
  );
};

export default CharacterDescr;