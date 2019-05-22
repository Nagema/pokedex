import React from 'react';
import './App.scss';
import Header from './Components/Header'
import PokedexFilter from './Components/PokedexFilter'
import PokemonList from './Components/PokemonList'
function App() {
  return (
    <div className="App">
      <Header/>
      <div id="app" className="main-content">
         <PokedexFilter/>
         <PokemonList/>
      </div>  
    </div>

  );
}                              
export default App;
