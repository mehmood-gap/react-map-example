// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';

import {
  ActivityIndicator,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const ProfileScreen = ({navigation}) => {
  const handleEdit = () => {
    navigation.push('EditProfileScreen');
  };

  const handleView = () => {
    navigation.push('ViewProfileScreen');
  };

  const handleLocation = () => {
    navigation.push('LocationScreen');
  };

  // _storeData = async response => {
  //   try {
  //     await AsyncStorage.setItem('token', response);
  //     await AsyncStorage.setItem('name', response);
  //     await AsyncStorage.setItem('email', response);
  //     setDisable(false);
  //     this.props.navigation.replace('Auth');
  //   } catch (error) {
  //     // Error saving data
  //   }
  // };

  const handleLogout = () => {
    // _storeData('xox');
    AsyncStorage.setItem('email', 'xox');
    console.log('You have been logout');
    navigation.replace('Auth');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.text}>
        <Text>Profile Screen</Text>
      </View>
      <View style={styles.button}>
        <Button onPress={handleView} title="Profile View"></Button>
      </View>
      <View style={styles.button}>
        <Button onPress={handleEdit} title="Edit Profile"></Button>
      </View>
      <View style={styles.button}>
        <Button onPress={handleLocation} title="Go to your location"></Button>
      </View>
      <View style={styles.button}>
        <Button onPress={handleLogout} title="Logout"></Button>
      </View>
      <View style={styles.button}>
        <Button onPress={handleBack} title="Back"></Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    height: Dimensions.get('window').height * 0.2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    height: Dimensions.get('window').height * 0.05,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: Dimensions.get('window').width * 0.05,
  },
});

export default ProfileScreen;
