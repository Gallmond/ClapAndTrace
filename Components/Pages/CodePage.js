import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const CodePage = () => {

  return (<View style={styles.container}>
    <Text style={{...styles.text, marginBottom: 5}}>This is your code.</Text>
    <Text style={styles.text}>Your partner should tap 'Scan a code' and scan this code!</Text>


  </View>)

}

const styles = StyleSheet.create({
  container:{

  },
  text: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'normal',
    fontSize: 17,
  }

});

export default CodePage;