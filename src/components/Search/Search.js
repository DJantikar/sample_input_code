import React, { Component } from 'react';

import './Search.css';

class SearchComponent extends Component {
    state = {
        name: '',
    }

    nameChangedHandler = (event) => {
        this.setState({name: event.target.value});
    }


    render () {
        return (
            <div className="Search">
                <input 
                    type="text" 
                    placeholder="Name" 
                    onChange={this.nameChangedHandler}
                    value={this.state.name} />
                <button onClick={() => this.props.fetchCentral(this.state.name)}>Search</button>
            </div>
        );
    }
}

export default SearchComponent;