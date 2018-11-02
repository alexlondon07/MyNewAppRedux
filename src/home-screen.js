import React, { Component } from 'react'
import { View, StyleSheet , Button} from 'react-native'

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="Calzado"
                    onPress = { ()=> this.props.navigation.navigate('Shoes') }
                />
                <Button
                    title="Tecnología"
                    onPress = { ()=> this.props.navigation.navigate('Technology') }
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default HomeScreen;