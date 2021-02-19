import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import {DrawerItems} from 'react-navigation-drawer'
export default class CustomSideBarMenu extends Component{
    render(){
        return(
            <View>
               <View>
                   <DrawerItems
                     {...this.props}
                   />
               </View>
               <View>
                   <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Welcome Screen')
                firebase.auth().signOut()
                }} >
                       <Text>Log Out</Text>
                   </TouchableOpacity>
               </View>
            </View>
        )
    }
}