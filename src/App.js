import React from 'react'
import './App.css';
import { BrowserRouter} from 'react-router-dom'
import Routes from './Routes'

import {createStore} from 'redux';
import Reducer from './store/Reducer'
import {Provider} from 'react-redux'

const store = createStore(Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
function App() {
  // call api under use effect
// store data using reducer
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className="">
    <Routes />

    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
