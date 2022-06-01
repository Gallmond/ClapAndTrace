import React from 'react';
import { View, StyleSheet } from 'react-native'
import { PageContext } from './../../Contexts/PageContext';
import SquareButton from './../../Components/SquareButton'
import HomeScreenButtons from './../../Components/HomeScreenButtons'

const HomePage = () => {

  const { currentPage, setCurrentPage } = React.useContext(PageContext);

  return (
    <React.Fragment>
      <View style={styles.buttonsContainer}>
        <HomeScreenButtons />
      </View>
    </React.Fragment>
  )

}

const styles = StyleSheet.create({
  buttonsContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },

});

export default HomePage;