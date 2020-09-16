import React from 'react';
import logo from '../logo.svg';
import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from '../header/Header';

export default class App extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
    </div>
  );
}
}

