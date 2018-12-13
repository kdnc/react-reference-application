import React from 'react';
import axios from 'axios'
import PersonProfile from "../components/people/PersonProfile";

class PersonProfileContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      languages: []
    };
  }

  componentDidMount = () => {
    axios
      .get('/assets/languageData.json')
      .then((response) => {
        this.setState({
          languages: response.data.itemListElement
        });
      })
      .catch(function (error) {
        console.log('ERROR CODE: ' + error.response);
      })
  };

  render = () => {
    return (
      <section>
        <PersonProfile languages={this.state.languages}/>
      </section>
    );
  }
}

export default PersonProfileContainer;