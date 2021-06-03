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

const EditProfileScreen = ({navigation}) => {
  const handleBack = () => {
    navigation.pop();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.text}>
        <Text>Hello this is Edit Profile Screen</Text>
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

export default EditProfileScreen;
