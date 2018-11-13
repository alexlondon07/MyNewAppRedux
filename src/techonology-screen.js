import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { TECHNOLOGY } from './data';
import ProductsList from './products-list';
import { connect } from 'react-redux';
import { ADD_TO_CART } from './actionsTypes/cart-action-types';

class TechnologyScreen extends Component {
    render() {
        return (
        <View style = { styles.container }>
            <ProductsList onPressEvent = { this.props.addItemToCart } products = { TECHNOLOGY } />
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


export default connect(null, mapDispatchToProsp)(TechnologyScreen);