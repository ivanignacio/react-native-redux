//index.js

import { placeReducer } from './place_reducer'
import {combineReducers} from 'redux'
import {createStore} from 'redux'

const rootReducer = combineReducers({
    places: placeReducer
})

const configureStore = () => {
    return createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}

export default configureStore
