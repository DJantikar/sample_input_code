import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchComponent from '../components/Search/Search'
import * as actionTypes from '../store/actions';

class Search extends Component {
    
    render () {
        return (
            <div>
                <SearchComponent fetchCentral={this.props.onfetchCentral} />
                value : {this.props.centralName}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        centralName: state.centralName
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onfetchCentral: (name) => dispatch({type: actionTypes.FETCH_CENTRAL, value: {centralName:name}}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);