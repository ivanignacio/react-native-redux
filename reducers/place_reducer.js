// place_reducer.js

import { ADD_PLACE, REMOVE_PLACE } from '../actions/types'

const initialState = {
    places: [
        {
            key: 1321314,
            value: 'Kingston'
        }
    ]
}

export const placeReducer = (state = initialState, action) =>{
    console.log(action)
    switch(action.type){
        case ADD_PLACE:{
            return{
                ...state,
                places : state.places.concat({ key: Math.random(), value: action.payload })
            }
        }
        case REMOVE_PLACE:{
            return{
                ...state,
                places: state.places.filter(element => element.value!= action.payload)                
            }
        }
        default:{
            return state
        }   
    }
}
