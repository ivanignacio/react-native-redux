// place_actions.js

import { ADD_PLACE } from './types'

export const addPlace = (name) =>{
    return {
        type: ADD_PLACE,
        payload: name
    }
}