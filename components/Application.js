//Application.js

import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, Button, FlatList, ScrollView} from 'react-native'
import {connect} from 'react-redux'
import {addPlace} from '../actions/place_actions'

class Application extends Component{    
    state = {
        temporaryPlace: ''
    }

    handlePressEvent = () =>{
        console.log(`New value of the temporary text is ${this.state.temporaryPlace}`)
        this.props.add(this.state.temporaryPlace.trim())
        this.setState(() => {
            return{
                temporaryPlace: ''
            }
        })
    }

    handleChangeText = (text) =>{
        this.setState(() => {
            return {
                temporaryPlace: text
            }
        })                
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput placeholder={"Enter a city here"} value={this.state.temporaryPlace} onChangeText={text => this.handleChangeText(text)} />
                <Button title={"Add place"} onPress={this.handlePressEvent}/>
                <View>
                    <Text>You have {this.props.places.length} place(s) in your state</Text>
                </View>
                <View>
                    {   
                        this.props.places.map((currentPlace) => (
                            <Text key={currentPlace.key}>{currentPlace.value}</Text>
                        ))
                    }
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    //The first     'places' is the name we're going to use from now on from the props eg. this.props.places
    //The second    'places' is the one we assigned in the combineReducers, which you can rename as needed
    //The third     'places' is part of the initialState inside of place_reducer.js
    return{
        places: state.places.places
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        add: (name) =>{
            dispatch(addPlace(name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Application)

const styles = StyleSheet.create({
    container:{
        padding: 20,
    }
})