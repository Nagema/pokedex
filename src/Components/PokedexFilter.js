import React from 'react';
class PokemonList extends React.Component{
  render(){
    return (
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
    )
  }
}
export default PokemonList;