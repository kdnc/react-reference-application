import {createReducer} from './../../utility/';
import {UPDATE_STATUS} from './../../actions/messenger/updateStatus'

export const currentUser = createReducer(null, {
  [UPDATE_STATUS](state, action) {
    return state.set(`status`, action.status);
  }
});