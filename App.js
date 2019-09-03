import React, {Component} from 'react';
import Application from './components/Application'
import {Provider} from 'react-redux'
import configureStore from './reducers/index'

// yarn add redux react-redux
// # or
// npm install redux react-redux --save

const store = configureStore()
export default class App extends Component{
  render(){
    return (
      <Provider store= {store}>
        <Application/>
      </Provider>
    )
  }
}
