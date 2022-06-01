import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import SquareButton from './SquareButton';
import { PAGE_SCAN, PAGE_CODE, PAGE_CHECK, PAGES } from './../Helpers/Constants';
import { PageContext } from '../Contexts/PageContext';

const HomeScreenButtons = (props) => {

  const { currentPage, setCurrentPage } = useContext( PageContext );

  const setPage = ( page ) => {
    console.log('setPage', page);
    if(!PAGES.includes(page)){
      throw new Error(`${page} is not a valid page`);
    }
    setCurrentPage( page );
  }

  return (
    <View style={styles.container}>
      <SquareButton onPress={()=>{ setPage( PAGE_SCAN ) }} title="Scan a code" />
      <SquareButton onPress={()=>{ setPage( PAGE_CODE ) }} title="Display my code" />
      <SquareButton onPress={()=>{ setPage( PAGE_CHECK ) }} title="Check now" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
  }
})

export default HomeScreenButtons;