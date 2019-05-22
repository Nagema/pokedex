import React from 'react';
class Pokemon extends React.Component {
  render() {
    return (
      <div className="pokemon-card">
        <div className="background-wrapper">
          <div></div>
          <div></div>
        </div>
        <span className="remove-pokemon"><i className="material-icons">close</i></span>
        <div className="image-wrapper"><img src="images/pokemons/bulbasaur.png" alt="bulbasaur" className="pokemon-image" /></div>
        <div className="pokemon-title">bulbasaur</div>
      </div>
    )
  }
}
export default Pokemon;

