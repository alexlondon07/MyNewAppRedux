import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import ProductsList from './products-list';
import { SHOES } from './data';
import { connect } from 'react-redux';
import { ADD_TO_CART } from './actionsTypes/cart-action-types';

class ShoesScreen extends Component {
    render() {
        return (
        <View style = { styles.container }>
            <ProductsList onPressEvent = { this.props.addItemToCart } products = { SHOES } />
        </View>
        )
    }
}

const mapDispatchToProsp = ( dispatch ) => {
    return {
        addItemToCart: ( product ) => dispatch({
            type: ADD_TO_CART,
            payload: product
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


export default connect(null, mapDispatchToProsp)(ShoesScreen);