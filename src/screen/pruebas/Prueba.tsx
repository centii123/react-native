import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';


interface Props {
}

const Prueba:FC <Props> = () => {
  return (
    <View style={styles.container}>
        <Text>Hello 1</Text>  
        <Text>Hello World2!</Text> 
        <Text>Hello World3!</Text> 
    </View>          
    
  )
}

export default Prueba;

/*Estilos */
 const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#fff",
        alignItems:"center",
        justifyContent:"center",
    },
 });