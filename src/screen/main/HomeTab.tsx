import { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pruebas/HomeScreen';
import SettingsScreen from '../pruebas/SettingsScreen';
import Login from './Login';

interface Props {

}

const Tab = createBottomTabNavigator();


export const HomeTab:FC <Props> = () => {
    return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>        
    )
}

export default HomeTab;