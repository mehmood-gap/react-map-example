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

const ProjectScreen = ({navigation}) => {
  const handleRevision = () => {
    navigation.push('RevisionScreen');
  };

  const handleView = () => {
    navigation.push('ViewProjectScreen');
  };

  const handleRequirementRequest = () => {
    navigation.push('RequirementRequestScreen');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.text}>
        <Text>Project Screen</Text>
      </View>
      <View style={styles.button}>
        <Button onPress={handleView} title="ViewProject"></Button>
      </View>
      <View style={styles.button}>
        <Button onPress={handleRevision} title="Revisions"></Button>
      </View>
      <View style={styles.button}>
        <Button
          onPress={handleRequirementRequest}
          title="New Requirement Request"></Button>
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

export default ProjectScreen;
