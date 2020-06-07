let defaultState = {
    message: 'sb哈哈哈'
}

export default (state = defaultState, action) => {
    debugger
    switch (action.type) {
        case 'changeMessage':
            let newState = JSON.parse(JSON.stringify(state))
            newState.message = action.message
            return newState
        // break;

        default:
            return state
        // break;
    }
}