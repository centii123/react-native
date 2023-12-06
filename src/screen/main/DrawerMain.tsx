import { FC } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './Login';

interface Props {

}
const Drawer = createDrawerNavigator();

export const DrawerMain:FC <Props> = () => {
    return (
    <Drawer.Navigator>
        <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>      
    )
}

export default DrawerMain;