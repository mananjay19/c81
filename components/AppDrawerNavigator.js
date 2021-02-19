import React from 'react';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu from './CustomSideBarMenu'
import {createDrawerNavigator} from 'react-navigation-drawer'
import SettingScreen from '../screens/SettingScreen'

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{screen:AppTabNavigator},


setting:{screen:SettingScreen},
},
{contentComponent:CustomSideBarMenu},
{initialRouteName:'Home'}
)