import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CoolDatePicker from '../CoolDatePicker';

const I = (props) => {
  return <Text style={{fontStyle:'italic'}}>{props.children}</Text>
}

const B = (props) => {
  return <Text style={{fontWeight:'bold'}}>{props.children}</Text>
}

const ReportPage = () =>  {

  const [testDate, setTestDate] = useState(new Date())
  const [sinceDate, setSinceDate] = useState(new Date())

  const onTestDateSet = ( newDate ) => {
    setTestDate(newDate)
  }

  const onSinceDateSet = ( newDate ) => {
    setSinceDate(newDate)
  }

  return <View style={styles.container}>
    <Text style={styles.text}>Use this form to report a positive test.</Text>
    <Text style={styles.text}>No details are recorded. Only that there <B>was</B> a positive test.</Text>
    
    <Text style={styles.text}>I tested positive on this date</Text>
    <CoolDatePicker onDateSet={onTestDateSet} />

    <Text style={styles.text}>But might have been positive since</Text>
    <CoolDatePicker onDateSet={onSinceDateSet} maxDate={testDate} />

  </View>
}

const styles = StyleSheet.create({
  container:  {
    alignContent: 'center',
    alignItems: 'center'
    
  },
  text: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'normal',
    fontSize: 17,
    margin: 10,
  },
  bigText:{
    textAlign: 'center',
    color: 'black',
    fontFamily: 'normal',
    fontSize: 20,
    margin: 5,
  }
});

export default ReportPage;