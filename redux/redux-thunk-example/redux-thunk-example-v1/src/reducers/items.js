const initialState = {
    items: [],
    isLoading: false,
    hasErrorOccurred: false
};


export function itemsReducer(state = initialState, action) {
    let payload;

    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            payload = { items: action.items };
            return {...state, ...payload };
        case 'ITEMS_IS_LOADING':
            payload = { isLoading: action.isLoading };
            return {...state, ...payload };
        case 'ITEMS_HAS_ERRORED':
            payload = { hasErrorOccurred: action.hasErrored };
            return {...state, ...payload };
        default:
            return state;
    }
}
