import React from 'react';
import Header from './header';
import {Provider} from 'react-redux';
import store from './store'

import './API/header';

function App() {
  return (
    // <div className="App">
      <Provider store={store}>
          <Header />
      </Provider>

    // </div>
  );
}

export default App;
