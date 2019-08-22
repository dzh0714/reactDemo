import React, { Component } from 'react';
import './App.css';
import Index from "./components/Index"
import { store, perSist } from "./store/store"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/es/integration/react"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <PersistGate persistor={perSist}>
            <Index />
          </PersistGate>
        </Provider>
      </div >
    );
  }
}

export default App;
