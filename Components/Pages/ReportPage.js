/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  ActivityIndicator,
  Platform,
} from 'react-native';
import CoolDatePicker from '../CoolDatePicker';
import SquareButton from '../SquareButton';

const B = props => {
  return <Text style={{fontWeight: 'bold'}}>{props.children}</Text>;
};

const ReportPage = () => {
  const [testDate, setTestDate] = useState(new Date());
  // eslint-disable-next-line no-unused-vars
  const [sinceDate, setSinceDate] = useState(new Date());
  const [submittedToday, setSubmittedToday] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const onTestDateSet = newDate => {
    setTestDate(newDate);
  };

  const onSinceDateSet = newDate => {
    setSinceDate(newDate);
  };

  const submitReport = () => {
    /**
     * in the 'real world' we would now send all of our 'what I said' codes from
     * on or after the might-have-been-positive date to the remote server so
     * that other phones can check against them.
     *
     * We'll just pretend though.
     */
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
    }, 1500);

    setSubmittedToday(true);
    thankYouNotification();
  };

  const thankYouNotification = () => {
    if (Platform.OS !== 'android') {
      return;
    }
    ToastAndroid.show('Thank you for reporting!', ToastAndroid.LONG);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Use this form to report a positive test.</Text>
      <Text style={styles.text}>
        No details are recorded. Only that there <B>was</B> a positive test.
      </Text>

      <View style={styles.formContainer}>
        {/* if no report today, show the form */}
        {!submittedToday && (
          <React.Fragment>
            <Text style={styles.text}>I tested positive on this date</Text>
            <CoolDatePicker onDateSet={onTestDateSet} />

            <Text style={styles.text}>But might have been positive since</Text>
            <CoolDatePicker onDateSet={onSinceDateSet} maxDate={testDate} />
          </React.Fragment>
        )}

        {/* else just a thank you message */}
        {submittedToday && (
          <React.Fragment>
            <Text style={styles.text}>
              Thank you for being a responsible human.
              {isSending && <ActivityIndicator size="large" />}
            </Text>
          </React.Fragment>
        )}
      </View>

      {/* only show the submit button if a report has not been made today */}
      {!submittedToday && (
        <SquareButton title="submit" onPress={submitReport} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    alignContent: 'center',
    alignItems: 'center',

    borderColor: 'black',
    borderWidth: 2,
  },
  text: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'normal',
    fontSize: 17,
    margin: 10,
  },
  bigText: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'normal',
    fontSize: 20,
    margin: 5,
  },
});

export default ReportPage;
