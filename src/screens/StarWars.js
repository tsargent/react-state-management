import React from "react";
import useFetch from '../hooks/useFetch';

const StarWarsScreen = () => {
  const {isLoading, isError, response} = useFetch('https://star-wars-character-search.glitch.me/api/characters');
  return (
    <div className="App">
      <h1>Star Wars</h1>
      {isLoading ? <p>Loading characters...</p> : ''}
      {isError ? <p>Error!</p> : ''}
      {response?.data.characters.map((character) => <p key={character.name}>{character.name}</p>)}
    </div>
  );
};

export default StarWarsScreen
