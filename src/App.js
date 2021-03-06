import React from 'react';
import Header from './header';
import home from './page/home'
import {Provider} from 'react-redux';
import store from './store'
import {BrowserRouter,Route} from 'react-router-dom'
import detail from './page/detail/loadable.js'
import './API';


function App() {
  return (
    // <div className="App">
      <Provider store={store} >
          <Header />
          <BrowserRouter>
              <Route path='/' exact component={home}/>
              <Route path='/detail/' exact component={detail} />
          </BrowserRouter>
      </Provider>

    // </div>
  );
}

export default App;
