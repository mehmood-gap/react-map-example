// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component

import {ImagesPath} from '../../Styles';
import React, {useState} from 'react';

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
  ToastAndroid,
  Keyboard,
} from 'react-native';

// import AsyncStorage from '@react-native-community/async-storage';

const ForgotScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorTextEmail, setErrorTextEmail] = useState('');

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Email sent Successfully',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  const handleSubmitPress = () => {
    console.log('userEmail', userEmail);
    setErrorTextEmail('');
    if (!userEmail) {
      setLoading(false);
      setErrorTextEmail('Please fill Email*');
      return;
    }

    setLoading(true);
    showToastWithGravityAndOffset();
    console.log('Link Send');
    setLoading(false);
  };

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
        <View style={styles.wrapper}>
          <Text style={styles.header}>Recover Your Password</Text>
        </View>

        {/* Input View */}
        <View style={styles.mainBody}>
          <View style={styles.wrapper}>
            <Text style={styles.paragraph}>
              Enter your email address below & we'll send you an email
              instructions on how to change your password.
            </Text>
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              // style={styles.inputStyle}
              style={{
                color: 'white',
                marginHorizontal: Dimensions.get('window').width * 0.1,
                marginVertical: Dimensions.get('window').width * 0.03,
                fontWeight: 'normal',
              }}
              onChangeText={UserEmail => setUserEmail(UserEmail)}
              placeholder={
                errorTextEmail === '' ? 'Email Address' : errorTextEmail
              } //dummy@abc.com
              placeholderTextColor={
                errorTextEmail === '' || errorTextEmail === userEmail
                  ? 'white'
                  : 'red'
              }
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
              value={userEmail}
            />
            {/* <View style={styles.inputStyleLine} /> */}
          </View>
          <View style={styles.inputStyleLine} />
        </View>

        {/* Login Button View */}
        <View>
          <TouchableOpacity onPress={handleSubmitPress}>
            <LinearGradient
              colors={['#ffdd55', '#fe5341', '#c837ac']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.linearGradientButton}>
              {loading ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text style={{color: 'white', fontWeight: 'bold'}}>Submit</Text>
              )}
            </LinearGradient>
          </TouchableOpacity>
        </View>
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
    marginHorizontal: Dimensions.get('window').width * 0.1,
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
  // SectionStyle: {
  //   flexDirection: 'column',
  // },

  inputStyle: {
    color: 'white',
    marginHorizontal: Dimensions.get('window').width * 0.1,
    marginVertical: Dimensions.get('window').width * 0.03,
    fontFamily: 'OpenSans-Regular',
  },

  inputStyleLine: {
    backgroundColor: 'white',
    marginHorizontal: Dimensions.get('window').width * 0.1,
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
  },

  recover: {
    height: Dimensions.get('window').width * 0.05,
    marginBottom: Dimensions.get('window').height * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },

  paragraph: {
    fontSize: Dimensions.get('window').height * 0.021,
    color: 'white',
  },

  linearGradientButton: {
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

export default ForgotScreen;
