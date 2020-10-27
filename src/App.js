import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import  { Homepage }  from '../src/Homepage/Homepage.js';
import  { WordSelector }  from '../src/WordSelector/WordSelector.js';
import './App.css';

export class App extends Component{
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {

  }


  render() {
    return (
      <div className="BangWords">
        <header className="BangWords-header">
          BangWords
        </header>
        <Switch>
         <Route
            path='/'
            render={() => {
            return  <Homepage/>
            }}
          />
         <Route
            path='/word-selector'
            render={() => {
            return  <WordSelector/>
            }}
          />

        </Switch>
      </div>
    );
  }
}

export default App;
