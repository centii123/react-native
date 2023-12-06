import { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

interface Props {
}

const Stack = createNativeStackNavigator();

const NativeStack:FC <Props> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  )
}
export default NativeStack;