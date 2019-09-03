//Application.js

import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, Button, FlatList, ScrollView} from 'react-native'
import {connect} from 'react-redux'
import {addPlace} from '../actions/place_actions'
import {removePlace} from '../actions/place_actions'

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

    handleRemoveEvent = () =>{
        console.log(`The element to delete is ${this.state.temporaryPlace}`)
        this.props.remove(this.state.temporaryPlace.trim())
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

    checkAvailability = () => {
        return !(this.state.temporaryPlace.length > 1)
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput placeholder={"Enter a city here"} value={this.state.temporaryPlace} onChangeText={text => this.handleChangeText(text)} />
                <View style={styles.action}>
                    <Button  title={"Add a place"} onPress={this.handlePressEvent} disabled={this.checkAvailability()}/>
                </View>        
                <View style={styles.action}>
                    <Button style={styles.action} title={"Remove a place"} onPress={this.handleRemoveEvent} disabled={this.checkAvailability()}/>    
                </View>
                
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

const mapDispatchToProps = dispatch => {
    return{
        add: (name) => {
            dispatch(addPlace(name))
        }, 
        remove: (name) =>{
            dispatch(removePlace(name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Application)

const styles = StyleSheet.create({
    container:{
        padding: 20,
        paddingTop: 100
    },
    action:{
        paddingTop: 10,
    }
})