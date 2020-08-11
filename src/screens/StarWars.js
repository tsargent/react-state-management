import React, { useEffect, useState } from "react";
import axios from "axios";

const StarWarsScreen = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    setIsLoading(true)
    axios.get('https://swapi.dev/api/people')
      .then((response) => {
        setIsLoading(false)
        setCharacters(response.data.results)
      })
      .catch((error) => {
        setIsError(true)
      })
  }, [])
  return (
    <div className="App">
      <h1>Star Wars</h1>
      {isLoading ? <p>Loading characters...</p> : ''}
      {isError ? <p>Error!</p> : ''}
      {characters.map((character) => <p key={character.name}>{character.name}</p>)}
    </div>
  );
};

export default StarWarsScreen
