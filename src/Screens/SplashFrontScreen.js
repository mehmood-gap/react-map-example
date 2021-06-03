// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component

import {ImagesPath} from '../../Styles';
import React, {useState, createRef, useEffect} from 'react';

import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  Platform,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
// import AsyncStorage from '@react-native-community/async-storage';

const SplashFrontScreen = ({navigation}) => {
  setTimeout(() => {
    AsyncStorage.getItem('email').then(value =>
      navigation.replace(value === 'xox' ? 'SplashScreen' : 'Main'),
    );
  }, 1000);
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{width, height, backgroundColor: '#09043c'}}>
      <KeyboardAvoidingView enabled>
        {/* Picture view */}
        <View style={styles.imageContainer}>
          <LinearGradient
            colors={['#ffdd55', '#fe5341', '#c837ac']}
            start={{x: 0.7, y: 0}}
            style={styles.linearGradientPicture}>
            <Image
              source={ImagesPath['login'].uri}
              style={styles.imageStyle}></Image>
          </LinearGradient>
        </View>

        {/* Sign in Text */}
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: Dimensions.get('window').height * 0.5,
    width: '100%',
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },

  imageStyle: {
    height: Dimensions.get('window').height * 0.5,
    width: '100%',
    borderBottomLeftRadius: Dimensions.get('window').width * 0.8,
    borderBottomRightRadius: Dimensions.get('window').width * 0.8,
  },

  linearGradientPicture: {
    backgroundColor: 'transparent',
    width: '100%',
    transform: [{scaleX: 1.5}],
    borderBottomLeftRadius: Dimensions.get('window').width * 0.8,
    borderBottomRightRadius: Dimensions.get('window').width * 0.8,
    opacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: Dimensions.get('window').height * 0.01,
  },

  header: {
    fontSize: Dimensions.get('window').height * 0.04,
    fontWeight: 'bold',
    marginBottom: Dimensions.get('window').height * 0.01,
    color: 'white',
  },

  mainBody: {
    height: Dimensions.get('window').height * 0.25,
    paddingTop: Dimensions.get('window').height * 0.01,
    paddingBottom: Dimensions.get('window').height * 0.01,
    // backgroundColor: "black"
  },

  paragraph: {
    fontSize: Dimensions.get('window').height * 0.021,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SplashFrontScreen;
