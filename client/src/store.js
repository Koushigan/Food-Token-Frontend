import {combineReducers} from 'redux'

import {createStore , applyMiddleware} from 'redux'

import thunk from 'redux-thunk'

import {composedWithDevTools, composeWithDevTools} from 'redux-devtools-extension'
import { getAllFoodReducer } from './reducers/foodReducers'
import { cartReducer } from './reducers/cartReducers'

const finalReducer = combineReducers({
    getAllFoodReducer : getAllFoodReducer,
    cartReducer : cartReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
     cartReducer : {
        cartItems : cartItems
     }
}

const composeEnhancers= composeWithDevTools({})

const store = createStore(finalReducer , initialState , composeEnhancers(applyMiddleware(thunk)))

export default store