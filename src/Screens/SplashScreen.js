// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import {AppString} from '../../Styles';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
// import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';

import Welcome from '../Components/Splash/Intro';

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const {height, width} = Dimensions.get('window');
  const [animating, setAnimating] = useState(false);
  const [sliderState, setSliderState] = useState({currentPage: 0});
  // const height = AppDimens.dimensions.screenPaddingTop;

  const onPress = () => {
    setAnimating(true);
    setTimeout(() => {
      AsyncStorage.getItem('email').then(value =>
        navigation.replace(value === 'xox' ? 'Auth' : 'Main'),
      );
    }, 1000);
    console.log('Button Pressed');
  };

  const setSliderPage = (event: any) => {
    const {currentPage} = sliderState;
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor((x + 0.005) / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({sliderState, currentPage: indexOfNextScreen});
    }
  };

  const {currentPage: pageIndex} = sliderState;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: '#09043c'}}>
        <ScrollView
          style={{flex: 1}}
          horizontal={true}
          scrollEventThrottle={10}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={(event: any) => {
            setSliderPage(event);
          }}>
          {/* Welcome Component View */}
          <Welcome
            image="splash1"
            head="Nature Imitates Art"
            paragraph="... something like that"
            screen={AppString.en.Screen1}
          />
          <Welcome
            image="splash2"
            head="It's all about art"
            paragraph="... seriously, it is"
            screen={AppString.en.Screen2}
          />
          <Welcome
            image="splash3"
            head="Best deal on the market"
            paragraph="... let's find your next art"
            screen={AppString.en.Screen3}
          />
        </ScrollView>

        {/* Dots View */}
        <View style={styles.paginationWrapper}>
          {Array.from(Array(3).keys()).map((key, index) => (
            <View
              style={[
                styles.paginationDots,
                {opacity: pageIndex === index ? 1 : 0.2},
              ]}
              key={index}
            />
          ))}
        </View>

        {/* Button on last page View */}
        {pageIndex === 2 ? (
          <TouchableOpacity onPress={onPress}>
            <LinearGradient
              colors={['#ffdd55', '#fe5341', '#c837ac']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.linearGradient}>
              {animating ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  Get Started
                </Text>
              )}
            </LinearGradient>
          </TouchableOpacity>
        ) : null}
      </SafeAreaView>
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  paginationWrapper: {
    paddingBottom: Dimensions.get('window').height * 0.05,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: Dimensions.get('window').height * 0.012,
    width: Dimensions.get('window').width * 0.02,
    borderRadius: Dimensions.get('window').width * 0.02,
    backgroundColor: 'white',
    marginLeft: Dimensions.get('window').width * 0.02,
  },

  linearGradient: {
    backgroundColor: 'transparent',
    opacity: 0.9,
    height: Dimensions.get('window').height * 0.05,
    marginBottom: Dimensions.get('window').height * 0.04,
    marginHorizontal: Dimensions.get('window').width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Dimensions.get('window').width * 0.04,
  },
});
