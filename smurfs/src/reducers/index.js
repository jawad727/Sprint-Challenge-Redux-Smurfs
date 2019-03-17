import { FETCHING, FAILURE, SUCCESS, ADDING } from '../actions'



const initialState = {
   smurfs: [],
   fetching: false,
   error: null
 }

const smurfReducer = (state = initialState, action) => {
   switch (action.type) {

    case FETCHING:
      return {...state, fetching: true, error: ""}
    case FAILURE:
      return {...state, fetching: false, error: action.payload}
    case SUCCESS:
      return {...state, fetching: false, smurfs: [...state.smurfs, ...action.payload], error: ""}
    case ADDING:
      return {...state, smurfs: [...state.smurfs, action.payload]}
    default: 
    return state;
   }
 }

export default smurfReducer

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
