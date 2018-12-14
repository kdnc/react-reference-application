import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import AddPlace from "../../components/place/AddPlace";
import * as placeActions from '../../actions/placeActions'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class AddPlaceContainer extends Component {

  render = () => {
    return (
      <AddPlace handleAddPlace={this.handleAddPlace}/>
    );
  };

  handleAddPlace = (placeName) => {
    this.props.placeActions.addPlace(placeName);
  };
}

// AddPlaceContainer.propTypes = {
  // addPlace: PropTypes.func.isRequired
// };

function mapStateToProps(state) {
  let { places } = state;
  return { places };
}

function mapDispatchToProps(dispatch) {
  return {
    placeActions: bindActionCreators(placeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPlaceContainer);