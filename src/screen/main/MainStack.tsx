import { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';

interface Props {

}
const Stack = createStackNavigator();

export const MainStack:FC <Props> = () => {
    return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>      
    )
}

export default MainStack;