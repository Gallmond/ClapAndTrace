import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HomeScreenButtons from './Components/HomeScreenButtons';
import Logo from './Components/Logo';
import SquareButton from './Components/SquareButton';
import {PAGE_CHECK, PAGE_CODE, PAGE_HOME, PAGE_REPORT, PAGE_SCAN} from './Helpers/Constants';
import HomePage from './Components/Pages/HomePage';
import CodePage from './Components/Pages/CodePage';

import {PageContext} from './Contexts/PageContext';
import ScanPage from './Components/Pages/ScanPage';

const Main = () => {

  /**
   * Establish application state
   */
  const [currentPage, setCurrentPage] = useState(PAGE_HOME);
 

  return (
    <View style={styles.container}>
      <View style={styles.topBit}>
        <Text style={{color: 'black'}}>Current page is {currentPage}</Text>
        <Logo />
      </View>

      <View style={styles.bottomBit}>
        <PageContext.Provider value={{currentPage, setCurrentPage}}>

          {/* Page content zone */}
          <View style={styles.pageContentZone}>
            {currentPage === PAGE_HOME && ( <HomePage /> )}
            {currentPage === PAGE_CODE && ( <CodePage /> )}
            {currentPage === PAGE_SCAN && ( <ScanPage /> )}
            {currentPage === PAGE_CHECK && ( <Text>Check page</Text> )}
            {currentPage === PAGE_REPORT && ( <Text>Report page</Text> )}
          </View>

          {/* bottom nav zone */}
          <View style={styles.bottomNavZone}>
          {currentPage === PAGE_HOME && (
            <View style={styles.buttonsContainer}>
              <SquareButton onPress={() => { setCurrentPage(PAGE_REPORT); }} title="Report positive test" />
            </View>
          )}
          {currentPage !== PAGE_HOME && (
            <View style={styles.reportButtonContainer}>
              <SquareButton onPress={() => { setCurrentPage(PAGE_HOME); }} title="Home" />
            </View>
          )}
          </View>


          


        </PageContext.Provider>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topBit: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
  },
  bottomBit: {
    flex: 2,
    // backgroundColor: 'green',
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  reportButtonContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  pageContentZone: {
    // backgroundColor: 'red',

  },
  bottomNavZone: {
    // backgroundColor: 'blue',
  },
});

export default Main;
