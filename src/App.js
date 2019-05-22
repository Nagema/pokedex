import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="main-header">
       Pokedex
      </header>
      <div id="app" className="main-content">
         <aside className="pokedex-filters">
            <div className="nice-input-wrapper"> 
              <input type="text" placeholder="Search by name" className="nice-input"/>
                <span className="focus-border"></span>
            </div>
            <p className="checkboxes-list-title">Type</p>
            <div className="checkboxes-list">
               <div className="md-checkbox">
                 <input id="checkbox-grass" type="checkbox" value="grass"/>
                 <label htmlFor="checkbox-grass">
                   <i className="material-icons">lens</i>
                   <span className="label-title">grass</span>
                   </label>
                   </div>
               <div className="md-checkbox"><input id="checkbox-poison" type="checkbox" value="poison"/> <label htmlFor="checkbox-poison"><i className="material-icons">lens</i> <span className="label-title">poison</span></label></div>
               <div className="md-checkbox"><input id="checkbox-fire" type="checkbox" value="fire"/> <label htmlFor="checkbox-fire"><i className="material-icons">lens</i> <span className="label-title">fire</span></label></div>
               <div className="md-checkbox"><input id="checkbox-flying" type="checkbox" value="flying"/> <label htmlFor="checkbox-flying"><i className="material-icons">lens</i> <span className="label-title">flying</span></label></div>
               <div className="md-checkbox"><input id="checkbox-water" type="checkbox" value="water"/> <label htmlFor="checkbox-water"><i className="material-icons">lens</i> <span className="label-title">water</span></label></div>
               <div className="md-checkbox"><input id="checkbox-bug" type="checkbox" value="bug"/> <label htmlFor="checkbox-bug"><i className="material-icons">lens</i> <span className="label-title">bug</span></label></div>
               <div className="md-checkbox"><input id="checkbox-normal" type="checkbox" value="normal"/> <label htmlFor="checkbox-normal"><i className="material-icons">lens</i> <span className="label-title">normal</span></label></div>
               <div className="md-checkbox"><input id="checkbox-electric" type="checkbox" value="electric"/> <label htmlFor="checkbox-electric"><i className="material-icons">lens</i> <span className="label-title">electric</span></label></div>
            </div>
         </aside>
         <main className="main-view">
            <article className="pokemons-list">
               <div className="pokemon-card">
                  <div className="background-wrapper">
                     <div></div>
                     <div></div>
                  </div>
                  <span className="remove-pokemon"><i className="material-icons">close</i></span> 
                  <div className="image-wrapper"><img src="images/pokemons/bulbasaur.png" alt="bulbasaur" className="pokemon-image"/></div>
                  <div className="pokemon-title">bulbasaur</div>
               </div>
               <div className="pokemon-card">
                  <div className="background-wrapper">
                     <div></div>
                     <div></div>
                  </div>
                  <span className="remove-pokemon"><i className="material-icons">close</i></span> 
                  <div className="image-wrapper"><img src="images/pokemons/ivysaur.png" alt="bulbasaur" className="pokemon-image"/></div>
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
                  <div className="image-wrapper"><img src="images/pokemons/venusaur.png" alt="bulbasaur" className="pokemon-image"/></div>
                  <div className="pokemon-title">
                     venusaur
                  </div>
               </div>
               <div className="pokemon-card">
                  <div className="background-wrapper">
                     <div></div>
                  </div>
                  <span className="remove-pokemon"><i className="material-icons">close</i></span> 
                  <div className="image-wrapper"><img src="images/pokemons/charmander.png" alt="bulbasaur" className="pokemon-image"/></div>
                  <div className="pokemon-title">
                     charmander
                  </div>
               </div>
               <div className="pokemon-card">
                  <div className="background-wrapper">
                     <div></div>
                  </div>
                  <span className="remove-pokemon"><i className="material-icons">close</i></span> 
                  <div className="image-wrapper"><img src="images/pokemons/charmeleon.png" alt="bulbasaur" className="pokemon-image"/></div>
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
                  <div className="image-wrapper"><img src="images/pokemons/charizard.png" alt="bulbasaur" className="pokemon-image"/></div>
                  <div className="pokemon-title">
                     charizard
                  </div>
               </div>
            </article>
         </main>
      </div>  
    </div>

  );
}
                              
export default App;
