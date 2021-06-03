import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {AppColor, AppFont, AppStrings} from '../../Styles';

import {ImagesPath} from '../../Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator} from 'react-native-paper';
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

import NetInfo from '@react-native-community/netinfo';

const ProblemInternet = ({navigation}) => {
  const [language, setLanguage] = useState('en');
  const [checkinngInternet, setCheckingInternet] = useState(true);

  const check = () => {
    setCheckingInternet(true);
    setTimeout(
      function () {
        NetInfo.fetch().then(state => {
          if (state.isConnected) {
            //this.setState({ checkinngInternet: !this.state.checkinngInternet })
            navigation.replace('HomeScreen');
          } else {
            setCheckingInternet(false);
            navigation.replace('HomeScreen');
          }
        });
      }.bind(this),
      3000,
    );
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={ImagesPath['login'].uri}
        style={{width: Width * 0.8, height: Height * 0.4}}
      />
      <Text>{AppStrings[language].internet} </Text>
      <Text>{AppStrings[language].checkAgaininternet} </Text>
      <TouchableOpacity style={styles.buttonStyle} onPress={check}>
        {checkinngInternet ? (
          <Text style={styles.buttontext}>{AppStrings[language].tryAgain}</Text>
        ) : (
          <ActivityIndicator color="#fff" />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: Width * 0.8,
    height: Height * 0.06,
    backgroundColor: AppColor.color.secondaryAccent,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttontext: {
    color: '#fff',
    fontFamily: AppFont.font.bold,
  },
});
