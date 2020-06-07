import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './utils/store';
import Routes from './router/routers'
import './App.css';

class App extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <div>
        <Provider store={store}>
          <button onClick={() => console.log('App点我', this.props)}>App点我</button>
          <hr />
          <Routes />
        </Provider>

      </div>

    );
  }
}

export default App;
