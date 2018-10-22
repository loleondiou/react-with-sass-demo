import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="header">This is the header</h1>
        </header>

        <div className="content">Some content</div>

        <div className="list">
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
            <li>four</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
