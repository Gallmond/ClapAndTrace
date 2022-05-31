import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HomeScreenButtons from './Components/HomeScreenButtons';
import Logo from './Components/Logo';
import SquareButton from './Components/SquareButton';
import {PAGES, PAGE_HOME, PAGE_REPORT} from './Helpers/Constants';

import {PageContext} from './Contexts/PageContext';

const Main = () => {
  const [currentPage, setCurrentPage] = useState(PAGE_HOME);

  const homeScreenButtonsOnPress = page => {
    console.log('homeScreenButtonsOnPress', page);

    if (!PAGES.includes(page)) {
      throw new Error(`${page} is not a valid page`);
    }

    setCurrentPage(page);
  };

  const updateCurrentPage = page => {
    console.log('updateCurrentPage', page);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBit}>
        <Text style={{color: 'black'}}>Current page is {currentPage}</Text>
        <Logo />
      </View>

      <View style={styles.bottomBit}>
        <PageContext.Provider value={{currentPage, setCurrentPage}}>

          {currentPage === PAGE_HOME && (
            <React.Fragment>
              <View style={styles.buttonsContainer}>
                <HomeScreenButtons />
              </View>

              <View style={styles.reportButtonContainer}>
                <SquareButton onPress={() => { setCurrentPage(PAGE_REPORT); }} title="Report positive test" />
              </View>
            </React.Fragment>
          )}

          {currentPage !== PAGE_HOME && (
            <View style={styles.buttonsContainer}>
              <SquareButton onPress={() => { setCurrentPage(PAGE_HOME); }} title="Home" />
            </View>
          )}


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
    backgroundColor: 'green',
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
});

export default Main;
