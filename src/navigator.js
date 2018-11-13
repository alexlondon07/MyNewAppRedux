import React from 'react'
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './home-screen';
import ShoesScreen from './shoes-screen';
import TechnologyScreen from './techonology-screen';
import ShoppingCarIcon from './shopping-cart-icon';
import CartScreen from './cart-screen';

export const AppStackNavigator = createStackNavigator({
    Home: HomeScreen, 
    Shoes: ShoesScreen, 
    Technology: TechnologyScreen,
    Cart: CartScreen,
},{
    initialRouteName: 'Home',
    navigationOptions: {
        headerTitle: 'Mi Tienda',
        headerRight: (
            <ShoppingCarIcon/>
        )
    }
});