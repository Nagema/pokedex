import React from 'react';
// import { Link } from 'react-router-dom';
class PokedexFilter extends React.Component {
  render() {
    const {pokemons} = this.props;
    return (
      <main className="main-view">
        <ul className="pokemons-list"> 
        {pokemons.map((pokemon) => {
          return (
            // <Link to={pokemon(pokemon)}>
          <li className="pokemon_li" key={pokemon.id}>
          <div className="pokemon-card">
            <div className="background-wrapper">
              <div></div>
              <div></div>
            </div>
            <span className="remove-pokemon"><i className="material-icons">close</i></span>
            <div className="image-wrapper"><img src={pokemon.image} alt="bulbasaur" className="pokemon-image"/></div>
            <div className="pokemon-title">{pokemon.name}</div>
          </div>
          </li>
          // </Link>
           )
          })}
        </ul>
      </main>
    )
  }
}
export default PokedexFilter;

