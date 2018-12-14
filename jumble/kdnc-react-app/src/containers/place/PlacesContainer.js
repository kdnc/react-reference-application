import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {Table} from 'react-bootstrap';
import Place from '../../components/place/Place';
import * as placeActions from '../../actions/placeActions'
import AddPlaceContainer from './AddPlaceContainer';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class PlacesContainer extends Component {

  componentWillMount = () => {
    this.props.placeActions.loadPlaces();
  };

  render = () => {

    const style = {
      margin: 20,
      padding: 20,
      width: 800,
      backgroundColor: 'FF9B45'

    };

    let places = this.props.places.map((place, index) => (
      <Place key={index}
             name={place.name}
             handleDelete={this.onHandleDelete}
      />
    ));

    return (
      <div style={style}>
        <h1>Places</h1>
        <Table striped={false} responsive={true} bordered={false}>
          <thead>
          <tr>
            <th>Name</th>
            <th>&nbsp;</th>
          </tr>
          </thead>
          <tbody>
          {places}
          </tbody>
        </Table>
        <hr/>
        <AddPlaceContainer />
      </div>
    );
  };

  onHandleDelete = (e, name) => {
    this.props.placeActions.deletePlace(name);
  };
}

// PlacesContainer.propTypes = {
  // deletePlace: PropTypes.func.isRequired,
  // loadPlaces: PropTypes.func.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(PlacesContainer);