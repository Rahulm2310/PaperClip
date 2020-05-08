import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';

//Reusable Card component
export default Card = (props) => {
  let TouchableComponent = TouchableOpacity;

  //Using TouchableNativeFeedback for IOS and TouchableOpacity for AndroidOS
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.cardWrapper}>
      <TouchableComponent>
        <View style={styles.container}>{props.children}</View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    width: '90%',
    height: 110,
    borderRadius: 10,
    elevation: 8, //box shadow for android
    margin: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 20,
    shadowColor: '#000', //box
    shadowOffset: {
      //shadow
      width: 0, //for
      height: 1, //ios
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    padding: 30,
    paddingVertical: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'black',
  },
});
