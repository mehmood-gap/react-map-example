// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component

import {ImagesPath} from '../../Styles';
import React, {useState, createRef, useEffect} from 'react';

import LinearGradient from 'react-native-linear-gradient';
import {AppUrl} from '../../Styles';
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

const LoginScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorTextPassword, setErrorTextPassword] = useState('');
  const [errorTextEmail, setErrorTextEmail] = useState('');
  const [disable, setDisable] = useState(false);
  const [errorMessage, SetErrorMessage] = useState('');

  const passwordInputRef = createRef();

  _storeData = async response => {
    try {
      await AsyncStorage.setItem('token', response.access_token);
      await AsyncStorage.setItem('name', response.user.name);
      await AsyncStorage.setItem('email', response.user.email);
      setDisable(false);
      this.props.navigation.replace('HomeScreen');
    } catch (error) {
      // Error saving data
    }
  };

  const handlePasswordRecover = () => {
    navigation.navigate('ForgotScreen');
  };

  const handleSubmitPress = () => {
    console.log('userEmail', userEmail);
    setErrorTextEmail('');
    setErrorTextPassword('');
    if (!userEmail) {
      setErrorTextEmail('Please fill Email*');
      return;
    }
    if (!userPassword) {
      setErrorTextPassword('Please fill Password*');
      return;
    }

    setErrorTextPassword('');

    setLoading(true);
    var apiUrl = '';
    if (Platform.OS === 'ios') {
      apiUrl = AppUrl.ios.baseUrl;
    } else {
      apiUrl = AppUrl.android.baseUrl;
    }

    fetch(
      apiUrl + 'auth/login?email=' + userEmail + '&password=' + userPassword,
      {
        method: 'post',
      },
    )
      .then(res => res.json())
      .then(response => {
        console.log(response);
        if (response.status_code == 200) {
          _storeData(response);
          navigation.replace('Main');
        } else {
          SetErrorMessage('Wrong Credentials');
          setLoading(false);
          setDisable(true);
          setUserPassword('');
        }
      })
      .catch(error => {
        console.log('error catcuh login ', JSON.stringify(error));
        SetErrorMessage('Network Problem');
        setLoading(false);
        setDisable(true);
        setUserPassword('');
      });
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
          <Text style={styles.header}>Sign In Your Account</Text>
        </View>
        {disable ? <Text style={styles.errortext}>{errorMessage}</Text> : null}
        {/* Input View */}
        <View style={styles.mainBody}>
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
              // onSubmitEditing={() =>
              //   passwordInputRef.current && passwordInputRef.current.focus()
              // }
              // blurOnSubmit={false}
              value={userEmail}
            />
          </View>
          <View style={styles.inputStyleLine} />

          <View style={styles.SectionStyle}>
            <TextInput
              // style={styles.inputStyle}
              style={{
                color: 'white',
                marginHorizontal: Dimensions.get('window').width * 0.1,
                marginVertical: Dimensions.get('window').width * 0.03,
                fontWeight: 'normal',
              }}
              onChangeText={UserPassword => setUserPassword(UserPassword)}
              placeholder={
                errorTextPassword === '' ? 'Password*' : errorTextPassword
              } //12345
              placeholderTextColor={errorTextPassword === '' ? 'white' : 'red'}
              // ref={passwordInputRef}
              onSubmitEditing={Keyboard.dismiss}
              // blurOnSubmit={false}
              secureTextEntry={true}
              returnKeyType="next"
              value={userPassword}
            />
          </View>
          <View style={styles.inputStyleLine} />
        </View>

        <View style={styles.recover}>
          <TouchableOpacity onPress={handlePasswordRecover}>
            <Text style={styles.paragraph}>Recover Password?</Text>
          </TouchableOpacity>
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
                <Text style={{color: 'white', fontWeight: 'bold'}}>Login</Text>
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
    fontWeight: 'bold',
  },

  errortext: {
    width: Dimensions.get('window').width,
    textAlign: 'center',
    color: 'red',
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

export default LoginScreen;
