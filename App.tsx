/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 *
 * import { FC } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './src/screen/main/MainStack';


interface Props {
}

const App:FC <Props> = () => {
  return (
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  )
}
export default App;


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );

  <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
}

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/screen/pruebas/MyTabs';
import MainStack from './src/screen/main/MainStack';


export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

 */

/* funcional 
import { FC } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './src/screen/main/MainStack';


interface Props {
}

const App:FC <Props> = () => {
  return (
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  )
}
export default App;
*/

import { FC } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/screen/main/MainStack';
import HomeTab from './src/screen/main/HomeTab';

interface Props {
}

const App:FC <Props> = () => {
  return (
    <NavigationContainer>
      <HomeTab/>
    </NavigationContainer>
  )
}
export default App;

