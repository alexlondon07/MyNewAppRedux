import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ProductList from './products-list';
import { connect } from 'react-redux';
import { removeProductToCart } from './actions/cart-action-creator';

class CartScreen extends Component {
    render() {
        return (
        <View style = { styles.container }>
            <ProductList 
                onPressEvent = { this.props.removeItem }
                product = { this.props.cartItems }/>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flexBasis: '1',
    }
})

const mapStateToProsp = (state) => {
    return {
        cartItems: state.get('cart').toArray() //replace toJS method
    }
}
const mapDispatchToProsp =( dispatch ) => {
    return {
        removeItem: ( product ) => dispatchEvent( removeProductToCart( product ) ),
    }
}

export default connect(mapStateToProsp, mapDispatchToProsp)(CartScreen);