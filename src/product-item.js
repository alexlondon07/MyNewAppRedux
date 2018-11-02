import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet ,
    TouchableHighlight
} from 'react-native';

const ItemProduct = (props) => (
    <TouchableHighlight
        onPress = { ()=> props.onPressEvent(props.item) }
        underlayColor = "#ccc"
    >
    <View style={ styles.container }>
        <View>
            <Text style={ styles.title }>{ props.item.name }</Text>
            <Text style={ styles.price }> $ { props.item.price }</Text>
        </View>
    </View>
    </TouchableHighlight>

);
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
    },
    brand:{
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'black',
        paddingVertical: 5,
        paddingHorizontal: 7,
    },
    brandText:{
        color: 'white',
        fontSize: 11
    },
    title:{
        fontSize: 18,
        color: '#44546b'
    },
    price:{
        backgroundColor: '#70b124',
        color: 'white',
        fontSize: 13,
        borderRadius: 5,
        overflow: 'hidden',
        alignSelf: 'flex-start',
    },    
})

export default ItemProduct;
