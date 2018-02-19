import React, { Component } from 'react';

import Search from './containers/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ol>
          <li>Turn this app into one which does NOT use local state (in components) but instead uses Redux</li>
        </ol>
        <Search />
      </div>
    );
  }
}

export default App;
