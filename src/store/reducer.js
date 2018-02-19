import * as actionTypes from './actions';

const initialState = {
    centralName : 'some central name ..'
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_CENTRAL:
            return {
                ...state,
                centralName : action.value.centralName
            }

    }
    return state;
};

export default reducer;