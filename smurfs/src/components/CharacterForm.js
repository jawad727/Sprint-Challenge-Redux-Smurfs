import React from 'react';
// import { connect } from "react-redux"
import { addCharacters } from '../actions'


export class CharacterForm extends React.Component {

state = {
    name: '',
    age: '',
    height: ''
    
}

handleChanges = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit = e => {
    e.preventDefault();
    const SMURF = {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
    }
    this.props.addCharacters(SMURF)
};

render() {
    return(
        <form onSubmit={(e) => this.handleSubmit(e)}>
        <input
        type="text"
        value={this.state.name}
        placeholder="name"
        name="name"
        onChange={this.handleChanges}
        />

        <input
        type="number"
        value={this.state.age}
        placeholder="age"
        name="age"
        onChange={this.handleChanges}
        />

        <input
        type="text"
        value={this.state.height}
        placeholder="height"
        name="height"
        onChange={this.handleChanges}
        />

        <button> ADD </button>
        </form>
    )
}

}