import React from 'react';
import Index from './com/index'
import './App.css';
import {Provider} from 'react-redux'
import store from './store/store'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Index /> 
      </Provider>
    </div>
  );
}

export default App;
