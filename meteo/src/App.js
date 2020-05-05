import React, { Component } from 'react';
import axios from 'axios';
import Meteo from './components/Meteo';
import Header from './components/Header';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      errorMessage: '',
      key: '4ca67572e10349009eeed7f075392fbc',
      city: {},
      list: [],
    }
  }

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      pos => {
        var crd = pos.coords;
        axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${crd.latitude}&lon=${crd.longitude}&key=${this.state.key}`)
          .then(res => {
            this.setState({
              city: {
                city_name: res.data.city_name,
                country_code: res.data.country_code,
              },
              list: res.data.data.slice(0, 5),
            });
          })
          .catch(error => {
            this.setState({
              errorMessage: error.message,
            });
          })
          .finally(() => {
            this.setState({ isLoading: false });
          });
      },
      error => {
        this.setState({
          errorMessage: `ERROR${error.code}: ${error.message}`,
          isLoading: false,
        });
      }
    );
  }

  render() {
    let renderedView;
    const { isLoading, errorMessage, city, list } = this.state;
    if (isLoading) {
      renderedView = <p>Veuillez patienter, nous sommes entrain de vous localiser...</p>
    }
    else if (errorMessage !== '') {
      renderedView = <p>{errorMessage}</p>
    }
    else {
      renderedView = (
        <div>
          <Header city={city} />
          <Meteo list={list} />
        </div>
      );
    }
    return (
      <>
        {renderedView}
      </>
    );
  }
}

export default App;
