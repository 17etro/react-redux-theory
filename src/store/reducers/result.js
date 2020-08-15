import * as actionTypes from '../actions/actionTypes';

const initialState = {
    results: [],
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({value: action.result, id: new Date()})
            }
        case actionTypes.DELETE_RESULT:
            const newArray = state.results.filter(result => result.id !== action.ResultElId);
            return {
                ...state,
                results: newArray,
            }

    }
    return state;
};

export default reducer;