import { createStore } from 'redux';
import cartItems from '../reducers/cart-item';
import storeItems from '../reducers/stores-items';
import { combineReducers } from 'redux-immutable';

const rootReducers = combineReducers ({
    cart: cartItems,
    store: storeItems
});

export default store = createStore(rootReducers);