import React from 'react';
import './App.scss';
import Header from './Components/Header'
import PokedexFilter from './Components/PokedexFilter'
import PokemonList from './Components/PokemonList'
import {fetchPokemons} from './Services/FetchPokemons';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
    };
  }  
  componentDidMount() {
    this.FetchAllPokemons();
  }
  FetchAllPokemons() {
    fetchPokemons()
    .then(pokemons => {
      this.setState({
        pokemons: pokemons
      });
    });
  }

  render(){
    return (
      <div className="App">
      <Header/>
      <div id="app" className="main-content">
         <PokedexFilter pokemons={this.state.pokemons}/>
         <PokemonList pokemons={this.state.pokemons}/>

      </div>  
    </div>
  );
}
}                              
export default App;
