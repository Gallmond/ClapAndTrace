import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const generateQrCode = () => {
  const rand = Math.floor(Math.random() * 1000000).toString(32);
  return `Nayab is cool they are my pal :) ${rand}`;
}


const CodePage = () => {

  return (<View style={styles.container}>
    <Text style={{...styles.text, marginBottom: 5}}>This is your code.</Text>
    <Text style={styles.text}>Your partner should tap 'Scan a code' and scan this code!</Text>

    <View style={styles.qrContainer}>
    <QRCode
     value={generateQrCode()}
     size={250}
     />
    </View>

  </View>)

}

const styles = StyleSheet.create({
  qrContainer:{
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  container:{

  },
  text: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'normal',
    fontSize: 17,
    marginLeft: 5,
    marginRight: 5,
  }

});

export default CodePage;