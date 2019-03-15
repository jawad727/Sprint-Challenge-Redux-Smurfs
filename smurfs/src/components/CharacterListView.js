import React from 'react';
import { CharacterForm } from './CharacterForm'

export class CharacterListView extends React.Component {
    constructor() {
        super();
    }



render() {
    if (this.props.fetching) {
        <h3> Fetching Data... </h3>
    }
    return (
        
        <div>
            
        <h3>SMURF LIST</h3>


        <CharacterForm addCharacters={this.props.addCharacters}/>


            <ul>
                
            {this.props.smurfs.map(smurf => {
                return <li>{smurf.name}</li>
            })}
            
            </ul>

        </div>
    )
}
}
