import { createStore } from 'redux';

const InitialState = require('../mocks/db.json');


function cart(state = InitialState, action) {
    switch (action.type) {
        case 'ADD_CART':
            return { ...state, cart: [...state.cart, action.payload] }

        default:
            return state;
    }
}


const store = createStore(cart)
export default store