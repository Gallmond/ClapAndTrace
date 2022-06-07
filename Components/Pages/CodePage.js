import React from 'react';
import { View, StyleSheet, Text, NativeModules } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { DATA_PREFIX } from '../../Helpers/Constants';

const generateQrCode = () => {
  /**
   * in the 'real world' we would save this to local devices 'what I said' codes
   * so if the user then reports a positive test, we can send all the codes used
   * after the positive date off to the remote server as 'positive cases said'
   * codes for other phones to check.
   * 
   * We'll just pretend though.
   */

  const fingerPrint = NativeModules?.PlatformConstants?.getConstants()?.Fingerprint
    ?? NativeModules?.PlatformConstants?.getAndroidID() ?? ''

  if(fingerPrint === ''){
    //TODO[gavin] handle unable to create fingerprint
  }

  //TODO[gavin] hash fingerprint
  const hashedFingerprint = fingerPrint.replace(/\:/g, '-');

  const todayYYYYMMDD = new Date().toISOString().split('T')[0];

  const salt = Math.floor(Math.random() * 1000000).toString(32)

  const dataParts = [
    DATA_PREFIX,
    todayYYYYMMDD,
    hashedFingerprint,
    salt
  ];

  const dataString = dataParts.join(':');

  console.log('generated code data', dataString);

  return dataString;
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