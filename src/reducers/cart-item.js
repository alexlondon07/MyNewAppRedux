import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionsTypes/cart-action-types";
import { List as list, Map as map, fromJS } from 'immutable';
//const initialState = fromJS([]);
const initialState = list([]);

const cartItems = ( state = initialState, action ) => {

    switch(action.type){
        case ADD_TO_CART:
            //return [ ...state, action.payload ];
            return state.push(action.payload);

        case REMOVE_FROM_CART:    
            return state.filter(cartItem => cartItem.id !== action.payload.id );
    }
    return state;
}

export default cartItems;