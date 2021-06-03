import {ImagesPath} from '../../../Styles';
import React, {useState, useEffect} from 'react';

import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');
import {View, StyleSheet, Dimensions, Text, Image} from 'react-native';

const Welcome = props => {
  return (
    <View style={{width, height}}>
      {/* Picture View */}
      <View style={styles.imageContainer}>
        <LinearGradient
          colors={['#ffdd55', '#fe5341', '#c837ac']}
          start={{x: 0.7, y: 0}}
          style={styles.linearGradient}>
          <Image
            source={ImagesPath[props.image].uri}
            style={styles.imageStyle}></Image>
        </LinearGradient>
      </View>

      {/* Text View */}
      <View style={styles.wrapper}>
        <Text style={styles.header}>{props.head}</Text>
        <Text style={styles.paragraph}>{props.paragraph}</Text>
        <Text style={{color: 'white'}}>{props.screen}</Text>
      </View>
    </View>
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

  linearGradient: {
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
    marginVertical: Dimensions.get('window').height * 0.04,
  },

  header: {
    fontSize: Dimensions.get('window').height * 0.05,
    fontWeight: 'bold',
    marginBottom: Dimensions.get('window').height * 0.05,
    color: 'white',
  },

  paragraph: {
    fontSize: Dimensions.get('window').height * 0.025,
    marginBottom: Dimensions.get('window').height * 0.05,
    color: 'white',
  },
});

export default Welcome;
