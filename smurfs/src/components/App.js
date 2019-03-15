import React, { Component } from 'react';
import './App.css';
// import { connect } from 'http2';
import { CharacterListView } from './CharacterListView'
import { connect } from 'react-redux'
import { getCharacters, addCharacters } from '../actions'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */


export class App extends Component {

  componentDidMount() {
    this.props.getCharacters();
}

  render() {
    console.log(this.props)
    return (
      <div className="App">
       
      <CharacterListView smurfs={this.props.smurfs} fetching={this.props.fetching} addCharacters={this.props.addCharacters} />
      </div>
    );
  }
}




const mapStateToProps = function(state) {
  return {
      smurfs: state.smurfs,
      fetching: state.fetching
  }
}

export default connect( mapStateToProps, { getCharacters, addCharacters } )(App)