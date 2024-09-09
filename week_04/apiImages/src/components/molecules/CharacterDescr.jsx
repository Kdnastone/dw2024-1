import React from 'react';

const CharacterDescr = ({ character }) => {
  return (
    <div className="characterDescr">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>ID: {character.id}</p>
    </div>
  );
};

export default CharacterDescr;