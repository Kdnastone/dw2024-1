import React from 'react';
import CharacterDescr from '../molecules/CharacterDescr.jsx';

const CharacterList = ({ characters }) => {
  return (
    <div className="characterList">
      {characters.map(character => (
        <CharacterDescr key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;