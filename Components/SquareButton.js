import React, { useContext } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const SquareButton = (props) => {

  const { title, onPress, small } = props;

  // change styles if small is true
  const styleMod = small === true
    ? {width: 170, height: 37}
    : {}

  return (<TouchableOpacity style={{...styles.container, ...styleMod }} onPress={onPress}>
    <Text style={styles.text}>{title ?? 'Button Text'}</Text>
  </TouchableOpacity>)
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    width: 200,
    height: 50,

    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    
    borderWidth: 3,
    borderColor: 'black',

    marginTop: 10,
    marginBottom: 10,

  },
  text: {
    fontSize: 20,
    color: 'black'
  }
});

export default SquareButton;