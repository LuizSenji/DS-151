import React from "react";
import {View, Text, Button } from 'react-native';

function HomeScreen({navigation}){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HomeScreen</Text>
      <Button title='Ir para Galeria' 
        onPress={()=>navigation.navigate('Home2')}
      />
      <Button title='Ir para Calculadora de media'
        onPress={()=>navigation.navigate('Calculadora')}
      />
      <Button title='Ir para Contador'
        onPress={()=>navigation.navigate('Contador')}
      />
    </View>
  )
}

export default HomeScreen;