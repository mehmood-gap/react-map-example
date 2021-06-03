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
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const HomeScreen = ({navigation}) => {
  const handleProfile = () => {
    navigation.navigate('Profile');
  };

  const handleProject = () => {
    navigation.navigate('Project');
  };

  const handleMeeting = () => {
    navigation.navigate('Meeting');
  };

  const handleNotifications = () => {
    navigation.navigate('Notifications');
  };

  const handleInvoice = () => {
    navigation.navigate('Invoice');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.text}>
        <Text>This is the Main Home Screen</Text>
      </View>
      <View style={styles.button}>
        <Button onPress={handleProfile} title="Profile"></Button>
      </View>
      <View style={styles.button}>
        <Button onPress={handleProject} title="Project"></Button>
      </View>
      <View style={styles.button}>
        <Button onPress={handleMeeting} title="Meetings"></Button>
      </View>
      <View style={styles.button}>
        <Button onPress={handleInvoice} title="Invoice"></Button>
      </View>
      <View style={styles.button}>
        <Button onPress={handleNotifications} title="Notifications"></Button>
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

export default HomeScreen;
