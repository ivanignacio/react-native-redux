// place_actions.js

import { ADD_PLACE, REMOVE_PLACE } from './types'

export const addPlace = (name) =>{
    return {
        type: ADD_PLACE,
        payload: name
    }
}

export const removePlace = (name) =>{
    return{
        type: REMOVE_PLACE,
        payload: name
    }
}