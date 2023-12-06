import { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import Ejemplo1 from './Ejemplo1';


interface Props {
}

const Tab = createBottomTabNavigator();

const MyTabs:FC <Props> = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Ejemplo1" component={Ejemplo1}/>
    </Tab.Navigator>
  )
}
export default MyTabs;