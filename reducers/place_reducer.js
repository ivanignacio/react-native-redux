// place_reducer.js

import { ADD_PLACE } from '../actions/types'

const initialState = {
    places: [
        {
            key: 1321314,
            value: 'Kingston'
        }
    ]
}

export const placeReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_PLACE:{
            return{
                ...state,
                places : state.places.concat({ key: Math.random(), value: action.payload })
            }
        }
        default:{
            return state
        }   
    }
}
