import React, {useState, createRef, useEffect} from 'react';

import {
  ActivityIndicator,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Platform,
  PermissionsAndroid,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  Button,
} from 'react-native';
import {parse} from 'fast-xml-parser';

import {GoogleApiKey} from '../../../Styles';

// Import Map and Marker
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {NetworkInfo} from 'react-native-network-info';
import DeviceInfo from 'react-native-device-info';
// navigator.geolocation = require('@react-native-community/geolocation');

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const LocationScreen = ({navigation}) => {
  const [currentLongitude, setCurrentLongitude] = useState(-122.4324);
  const [currentLatitude, setCurrentLatitude] = useState(37.78825);
  const [locationStatus, setLocationStatus] = useState('');
  const [currentIpAddress, setCurrentIpAddress] = useState('192.168.18.19');
  const handleBack = () => {
    navigation.pop();
  };

  // get geocoding using google api
  // const getLocationFromApi = async () => {
  //   try {
  //     let response = await fetch(
  //       'https://maps.googleapis.com/maps/api/geocode/json?latlng=' +
  //         currentLatitude +
  //         ',' +
  //         currentLongitude +
  //         '&key=' +
  //         GoogleApiKey.geoCodingKey.key,
  //     );

  //     let data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  //api.ipstack.com/134.201.250.155

  // NetworkInfo.getIPAddress().then(publicAddress => {
  //   console.log(publicAddress);
  // });

  // get location using ip
  // const getLocationFromIpAddress = async () => {
  //   try {
  //     let response = await fetch(
  //       'http://api.ipstack.com/' +
  //         currentIpAddress +
  //         '?access_key=' +
  //         GoogleApiKey.ipStackKey.key,
  //     );

  //     let data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   const requestLocationPermission = async () => {
  //     if (Platform.OS === 'ios') {
  //       getOneTimeLocation();
  //       subscribeLocationLocation();
  //     } else {
  //       try {
  //         const granted = await PermissionsAndroid.request(
  //           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //           {
  //             title: 'Location Access Required',
  //             message: 'This App needs to Access your location',
  //           },
  //         );
  //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //           //To Check, If Permission is granted
  //           getOneTimeLocation();
  //           subscribeLocationLocation();
  //         } else {
  //           setLocationStatus('Permission Denied');
  //         }
  //       } catch (err) {
  //         console.warn(err);
  //       }
  //     }
  //   };
  //   requestLocationPermission();
  //   return () => {
  //     Geolocation.clearWatch(watchID);
  //   };
  // }, []);

  const getLocationFromFreeFreeIpAddress = async () => {
    try {
      let response = await fetch('http://ip-api.com/php/' + currentIpAddress);

      let data = await response.text();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getLocationFromFreeIpAddress = async () => {
    try {
      let response = await fetch('http://api.hostip.info');

      console.log(response);
      let data = await response.text();
      let obj = parse(data);
      console.log(
        obj.HostipLookupResultSet['gml:featureMember']['Hostip']['ip'],
      );
      setCurrentIpAddress(
        obj.HostipLookupResultSet['gml:featureMember']['Hostip']['ip'],
      );
    } catch (error) {
      console.error(error);
    }
  };

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        setLocationStatus('You are Here');

        //getting the Longitude from the location json
        const currentLongitude = parseFloat(
          JSON.stringify(position.coords.longitude),
        );

        //getting the Latitude from the location json
        const currentLatitude = parseFloat(
          JSON.stringify(position.coords.latitude),
        );

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);

        //Setting Longitude state
        setCurrentLatitude(currentLatitude);

        // getLocationFromApi();

        // NetworkInfo.getIPAddress().then(publicAddress => {
        //   console.log(publicAddress);
        //   setIpAddress(publicAddress);
        //   getLocationFromIpAddress();
        // });
        // Get IPv4 IP (priority: WiFi first, cellular second)
        // NetworkInfo.getIPV4Address().then(ipv4Address => {
        //   console.log(ipv4Address);
        //   setCurrentIpAddress(ipv4Address);
        //   getLocationFromIpAddress();
        // });
        // DeviceInfo.getIpAddress().then(ip => {
        //   // "92.168.32.44"
        //   console.log(ip);
        //   setCurrentIpAddress(ip);
        getLocationFromFreeIpAddress();
        getLocationFromFreeFreeIpAddress();
        // });
        // DeviceInfo.getPhoneNumber().then(phoneNumber => {
        //   // Android: null return: no permission, empty string: unprogrammed or empty SIM1, e.g. "+15555215558": normal return value
        //   console.log(phoneNumber);
        // });
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
    // navigator.geolocation.getCurrentPosition(
    //   data => {
    //     console.log('Hello current location ', data);
    //   },
    //   error => {
    //     console.log('request location error', error);
    //   },
    //   Platform.OS === 'android'
    //     ? {}
    //     : {enableHighAccuracy: true, timeout: 20000, maximumAge: 10000},
    // );
  };

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      position => {
        //Will give you the location on location change

        setLocationStatus('You are Here');
        console.log(position);

        //getting the Longitude from the location json
        const currentLongitude = parseFloat(
          JSON.stringify(position.coords.longitude),
        );

        //getting the Latitude from the location json
        const currentLatitude = parseFloat(
          JSON.stringify(position.coords.latitude),
        );

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);

        //Setting Latitude state
        setCurrentLatitude(currentLatitude);
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000,
      },
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: currentLatitude,
            longitude: currentLongitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          region={{
            latitude: currentLatitude,
            longitude: currentLongitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
          customMapStyle={mapStyle}>
          <Marker
            draggable
            coordinate={{
              latitude: currentLatitude,
              longitude: currentLongitude,
            }}
            onDragEnd={e => {
              alert(JSON.stringify(e.nativeEvent.coordinate));
              setCurrentLatitude(e.nativeEvent.coordinate.latitude);
              setCurrentLongitude(e.nativeEvent.coordinate.longitude);
            }}
            title={'Test Marker'}
            description={'This is a description of the marker'}
          />
        </MapView>
      </View>
      <View style={styles.button}>
        <Button onPress={getOneTimeLocation} title="Current Location"></Button>
      </View>
      <View style={styles.button}>
        <Button onPress={handleBack} title="Back"></Button>
      </View>
    </SafeAreaView>
  );
};

const mapStyle = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}],
  },
];

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

  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default LocationScreen;
