import React from 'react'
import {connect} from 'react-redux'
import {updateStatus} from '../../../actions/index'
import {CurrentUser} from "../../../components/redux-messenger/CurrentUser";

const mapStateToProps = (state) => {
  const currentUser = state.get(`currentUser`);
  return {
    name: currentUser.get(`name`),
    status: currentUser.get(`status`),
    id: currentUser.get(`id`)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateStatus: ({target: {value}}) => {
      console.log('Updating status...', value);
      dispatch(updateStatus(value));
    }
  }
};

export const CurrentUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentUser);