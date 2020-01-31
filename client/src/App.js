import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import { Provider } from 'react-redux';
import store from './store';
import ItemModel from './components/ItemModel';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      //Wrap all in order to use REDUX,
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModel />
            <MovieList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
