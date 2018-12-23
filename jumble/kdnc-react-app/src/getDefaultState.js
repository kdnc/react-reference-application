import {ONLINE} from "./actions";
import {fromJS} from "immutable";

export const getDefaultState = () => {
  const defaultState = {
    currentUser: {}
  };

  defaultState.currentUser = {
    name: 'Nuwan',
    status: ONLINE,
    id: 1
  };

  return fromJS(defaultState);
};