import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './Components/Characters';

function App() {

  const [characters, setCaracters] = useState(null);

  const reqApi = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    setCaracters(data.results);
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1 className='title'> Rick & Morty </h1>
      {characters ? (
         <Characters characters={characters} setCaracters={setCaracters} />
      ) : (
        <>
        <img src={imageRickMorty} className="img-home" alt="Rick and Morty"/>
        <button onClick={reqApi} className='btn-search'>Buscar Personajes:</button>
        </>
      )}
      </header>
    </div>
  );
}

export default App;
