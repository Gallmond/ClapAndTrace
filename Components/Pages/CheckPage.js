import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import SquareButton from '../../Components/SquareButton';

const CheckPage = () => {

  const [checkInProgress, setCheckInProgress] = useState(null);
  const [positiveReported, setPositiveReported] = useState(false);

  const performCheck = () => {
    setCheckInProgress(true);
    setTimeout(() => {
      /**
       * in the 'real world' we would now do a call to the repository of codes
       * for 'positive cases said these codes' and compare it to 'codes I heard'
       * and return positive if this phone has 'heard' any of the positivbe case
       * codes.
       * 
       * But we'll just randomly pick a result
       */
      setCheckInProgress(false);
      setPositiveReported(Math.random() > 0.5);
    }, 3000);
  }

  const renderReport = ( isPositive ) => {
    if(isPositive){
      return (
        <View style={styles.reportContainer}>
          <Text style={styles.smallText}>Someone you recently banged has reported a positive test. Please get yourself checked!</Text>
          <Text style={styles.smallText}>Be sure to report your own test if it is positive.</Text>
          <Text style={styles.iconText}>⚠</Text>
        </View>
      )
    }

    return (<View style={styles.reportContainer}>
      <Text style={styles.smallText}>None of your logged partners have reported anything. Have fun!</Text>
      <Text style={styles.iconText}>✔</Text>
    </View>)
  }

  return(
    <View style={styles.container}>
      <SquareButton title="Check now" onPress={performCheck}/>

      {checkInProgress && <Text style={styles.bigText}>Checking...</Text>}

      {checkInProgress !== null && !checkInProgress && renderReport( positiveReported )}

    </View>
  )


}

const styles = StyleSheet.create({
  iconText:{
    fontSize: 100,
    color: 'black',
  },

  reportContainer:{
    alignContent: 'center',
    alignItems: 'center',
  },

  container: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },  

  bigText:{
    textAlign: 'center',
    color: 'black',
    fontFamily: 'normal',
    fontSize: 30,
    margin: 10,
  },

  smallText: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'normal',
    margin: 10,
    fontSize: 17,
  }

});

export default CheckPage;

