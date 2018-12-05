import React from 'react';
import { View , StyleSheet } from 'react-native';
import { Badge, Icon, Text, Button } from 'native-base';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

const ShoppingCarIcon =  props => (
    <View style ={ styles.container }>
        <Button iconLeft transparent primary>
            <Icon 
                name='md-cart' 
                onPress = { ()=> props.navigation.navigate('Cart') }
            />
            <Badge>
                <Text> { props.cartItems.size } </Text>
            </Badge>
        </Button>        
    </View>
);

const mapDispatchToProsp = ( state ) => {
    return {
        cartItems: state.get('cart')
    }
}

const styles = StyleSheet.create({
    container:{
        padding: 5
    },
    badget: {
        position: 'absolute',
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: 'red',
        right: 15, 
        bottom: 15,
        alignItems: 'center',
        zIndex: 1000
    },
    badgetText: {
        fontWeight: 'bold',
    }
})


export default connect(mapDispatchToProsp, null)(withNavigation(ShoppingCarIcon));
