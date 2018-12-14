import * as TYPES from '../actions/actionTypes';

const initialState = [
  {name: 'Moe\'s Tavern'},
  {name: 'Home'},
  {name: 'Starrfield Elementary'},
  {name: 'Nuclear Power Plant'},
  {name: 'Mr. Burn\'s Mansion'}
];

function placesReducer(state = [], action) {

  switch (action.type) {

    case TYPES.LOAD_PLACES:
      return initialState;

    case TYPES.DELETE_PLACE:
      return state.filter(place => place.name !== action.name);

    case TYPES.ADD_PLACE:
      const place = {name: action.name};
      return state.concat(place);

    default:
      return state;
  }

}

export default placesReducer;