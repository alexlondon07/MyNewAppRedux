import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import ItemProduct from './product-item';

class ProductsList extends Component {

    keyExtractor = (item) => item.id.toString();
    render() {
        return (
        <View>
            <FlatList
                data ={ this.props.products }
                renderItem={({item}) => <ItemProduct onPressEvent={ this.props.onPressEvent } item ={ item } /> }
                keyExtractor = { this.keyExtractor }
                />
        </View>
        )
    }
}

export default ProductsList;