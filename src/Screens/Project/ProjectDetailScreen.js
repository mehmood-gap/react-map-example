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

import BarChart from '../../Components/Graph/BarChart';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const ProjectDetailScreen = ({navigation}) => {
  const data = [
    {label: 'Requirements', value: 70},
    {label: 'Design', value: 62},
    {label: 'Develop', value: 24},
    {label: 'Integrate', value: 10},
    {label: 'Test', value: 45},
    {label: 'Deploy', value: 89},
  ];
  const handleBack = () => {
    navigation.pop();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.text}>
        <Text>Hello this is Project Detail Screen</Text>
      </View>
      <View style={styles.graph}>
        <BarChart data={data} unit="$" round={100} />
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

  graph: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height * 0.7,
    width: '100%',
    // backgroundColor: '#01CDFE',
  },

  button: {
    height: Dimensions.get('window').height * 0.05,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: Dimensions.get('window').width * 0.05,
  },
});

export default ProjectDetailScreen;
