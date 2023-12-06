import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react'
import { View, Text, Button } from 'react-native'

interface Props {
}

export const Login:FC <Props> = () => {

  const nav = useNavigation();

  /*const loginin = () => {
    console.debug("Iniciado sesion")
    nav.navigate("HomeTab" as never)
  }*/
    return (
    <>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login</Text>
    </View>
    <View>
      <Button title="Login"
      onPress={() => nav.navigate('HomeTab' as never)}/>
    </View>
    </>
    )
}

export default Login;