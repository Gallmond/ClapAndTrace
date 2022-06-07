import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { DATA_PREFIX } from '../../Helpers/Constants';


const ScanPage = () => {

  let cameraRef;

  const [currentBarCode, setCurrentBarCode] = useState(null)

  const storeCode = ( barCode ) => {
    /**
     * in 'the real world' this would save the barcode to the local devices
     * store of 'what I heard' codes.
     * 
     * It should also do a check immediately even though this basically destroys
     * any sense of anonymity.
     */
  }

  const isValidBarcodeData = ( barCode ) => {
    const { data } = barCode;
    return typeof data === 'string'
      && data.length > 0
      && data.indexOf(DATA_PREFIX) === 0;
  }

  const onBarCodeRead = (e) => {
    if(currentBarCode !== null) return;
    if(!isValidBarcodeData(e)) return;
    setCurrentBarCode( e );  
    storeCode( e );
  }

  return (<View style={styles.container}>
    <Text style={styles.text}>Your partner should display their code now</Text>

    <View style={styles.cameraContainer}>
      {!currentBarCode && (
        <RNCamera 
        ref={cameraRef}
        style={styles.camera}
        onBarCodeRead={onBarCodeRead}
      />
      )}

      {currentBarCode && (
        <React.Fragment>
          <Text style={styles.bigText}>Code scanned!</Text>
          <Text style={styles.bigText}>Have fun and be safe.</Text>
        </React.Fragment>
      )}
      
    </View>

  </View>)

}

const styles = StyleSheet.create({
  camera:{
    flex: 1,
    height: '100%',
  },
  cameraContainer:{
    width: '90%',
    aspectRatio: 1,
    backgroundColor: '#CCCCCC',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    // this is cheating, the camera exists outside the container we just can't see
    overflow: 'hidden', 
    flexDirection: 'column',
    justifyContent: 'center',
  },
  container:{

  },
  bigText:{
    textAlign: 'center',
    color: 'black',
    fontFamily: 'normal',
    fontSize: 30,
    margin: 10,
  },
  text: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'normal',
    fontSize: 17,
    margin: 10
  }
});

export default ScanPage;