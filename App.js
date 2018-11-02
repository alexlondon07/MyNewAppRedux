import React, {Component} from 'react';
import MyShopping from './src/my-shopping';
import { Provider } from 'react-redux';
import store from './src/store';

export default class App extends Component {
  render() {
    return (
      <Provider store = { store } >
        <MyShopping/>
      </Provider>
    );
  }
}