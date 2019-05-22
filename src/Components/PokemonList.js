import React from 'react';
class PokedexFilter extends React.Component {
  render() {
    return (
      <main className="main-view">
        <article className="pokemons-list">
          <div className="pokemon-card">
            <div className="background-wrapper">
              <div></div>
              <div></div>
            </div>
            <span className="remove-pokemon"><i className="material-icons">close</i></span>
            <div className="image-wrapper"><img src="images/pokemons/bulbasaur.png" alt="bulbasaur" className="pokemon-image" /></div>
            <div className="pokemon-title">bulbasaur</div>
          </div>
          <div className="pokemon-card">
            <div className="background-wrapper">
              <div></div>
              <div></div>
            </div>
            <span className="remove-pokemon"><i className="material-icons">close</i></span>
            <div className="image-wrapper"><img src="images/pokemons/ivysaur.png" alt="bulbasaur" className="pokemon-image" /></div>
            <div className="pokemon-title">
              ivysaur
            </div>
          </div>
          <div className="pokemon-card">
            <div className="background-wrapper">
              <div></div>
              <div></div>
            </div>
            <span className="remove-pokemon"><i className="material-icons">close</i></span>
            <div className="image-wrapper"><img src="images/pokemons/venusaur.png" alt="bulbasaur" className="pokemon-image" /></div>
            <div className="pokemon-title">
              venusaur
            </div>
          </div>
          <div className="pokemon-card">
            <div className="background-wrapper">
              <div></div>
            </div>
            <span className="remove-pokemon"><i className="material-icons">close</i></span>
            <div className="image-wrapper"><img src="images/pokemons/charmander.png" alt="bulbasaur" className="pokemon-image" /></div>
            <div className="pokemon-title">
              charmander
            </div>
          </div>
          <div className="pokemon-card">
            <div className="background-wrapper">
              <div></div>
            </div>
            <span className="remove-pokemon"><i className="material-icons">close</i></span>
            <div className="image-wrapper"><img src="images/pokemons/charmeleon.png" alt="bulbasaur" className="pokemon-image" /></div>
            <div className="pokemon-title">
              charmeleon
            </div>
          </div>
          <div className="pokemon-card">
            <div className="background-wrapper">
              <div></div>
              <div></div>
            </div>
            <span className="remove-pokemon"><i className="material-icons">close</i></span>
            <div className="image-wrapper"><img src="images/pokemons/charizard.png" alt="bulbasaur" className="pokemon-image" /></div>
            <div className="pokemon-title">
              charizard
            </div>
          </div>
        </article>
      </main>
    )
  }
}
export default PokedexFilter;

