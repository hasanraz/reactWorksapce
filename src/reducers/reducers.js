import { combineReducers } from 'redux'
import { ADD_ITEM } from './../actions/actions'

function todo(state, action) {
    switch (action.type) {
        case ADD_ITEM:
            return {
                id: action.id,
                text: action.text
            }
        default: 
            return state
    }
}

function todo1(state = [], action) {
    switch (action.type) {
        case ADD_ITEM:
            return [
                ...state,
                todo(undefined, action)
            ]
        default: 
            return state
    }
}

const todoConst = combineReducers({
    todo1
})

export default todoConst