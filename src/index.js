import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Search from './components/research.js'

class App extends Component {
    render() {
        return (
          <div id="content-container">
            <Search/>
          </div>
          );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
