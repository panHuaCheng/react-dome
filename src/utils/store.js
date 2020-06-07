//  import { reducer } from './reducer'
import { createStore } from 'redux'
const defaultState = {
    message: 'sb哈哈哈'
}

const store = createStore((state = defaultState, action) => {
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
})

export default store