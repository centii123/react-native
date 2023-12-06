import { FC } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


interface Props {
}

const Ejemplo1:FC <Props> = () => {
  return (
    <>
    <View style={styles.container}>
        <Text>Hello</Text>  
        <Text>Hello World1!</Text> 
        <Text>Hello World2!</Text>
        <Button title='Enviar' onPress={() => console.log("Send")}/>
    </View>  
    <View style={styles.container}>
        <Button title='Send' onPress={() => console.log("Send")}/>
    </View> 
    </>        
    
  )
}

export default Ejemplo1;

/*Estilos */
 const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#fff",
        alignItems:"center",
        justifyContent:"center",
    },
 });