import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';
import { TextInput } from 'react-native-gesture-handler';

export default class SettingScreen extends Component{
    constructor(){
        super()
        this.state={
            emailId:'',
            firstName:'',
            lastName:'',
            address:'',
            contact:'',
            docId:'',

        }
    }
    getUserDetails(){
        var user = firebase.auth().currentUser
        var email = user.email
        db.collection('Users').where('email_Id','==',email).get()
        .then(snapshot=>{
            snapshot.forEach(doc=>{
                var data = doc.data()
                this.setState({
                    emailId:data.email_Id,
                    firstName:data.first_Name,
                    lastName:data.last_Name,
                    address:data.address,
                    contact:data.contact,
                    docId:doc.Id
                })
            })
        })
    }
    updateUserDetail=()=>{
        db.collection('users').doc(this.state.docId)
        .update({
            'first_Name':this.state.firstName,
            'last_Name':this.state.lastName,
            'address':this.state.address,
            'contact':this.state.contact,
        })
        alert('profile updated sucessfully')
    }
    componentDidMount(){
        this.getUserDetails()
    }
    render(){
        return(
            <View>
               <MyHeader title='settings' navigation={this.props.navigation}></MyHeader>
                <View>
                    <TextInput
                       placeholder='first Name'
                       maxLength={8}
                       onChangeText={t=>{
                           this.setState({
                               firstName:t
                           })
                       }}
                       value={this.state.firstName}
                    ></TextInput>
                    <TextInput
                       placeholder='last Name'
                       maxLength={8}
                       onChangeText={t=>{
                           this.setState({
                               lastName:t
                           })
                       }}
                       value={this.state.lastName}
                    ></TextInput>
                    <TextInput
                       placeholder='contact'
                       maxLength={10}
                       keyboardType={'numeric'}
                       onChangeText={t=>{
                           this.setState({
                               contact:t
                           })
                       }}
                       value={this.state.contact}
                    ></TextInput>
                    <TextInput
                       placeholder='address'
                       multiline={true}
                       onChangeText={t=>{
                           this.setState({
                               address:t
                           })
                       }}
                       value={this.state.address}
                    ></TextInput>
                    <TouchableOpacity
                      onPress={()=>{this.updateUserDetail()}} 
                    >
                        <Text>save</Text>
                    </TouchableOpacity>
                    </View> 
            </View>
        )
    }
}