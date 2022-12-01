const initialState = {value: 0, strin: 234};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC':
        return {
            ...state, // взяли предыдущий стейт, развернули его
            value: state.value + 1 // изменили то что нам нужно
        };
        case 'DEC':
        return {
        ...state,
        value: state.value - 1
        };
        case 'RND':
        return {
        ...state,
        value: state.value * action.payload
        };
        default:
        return state;
    }
}

export default reducer;