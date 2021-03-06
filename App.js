/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WetherScreen from './WetherScreen'
import Home from './Home';
import DataView from './DataView'
import CreateData from './CreateData'

const Stack = createNativeStackNavigator();
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="WetherScreen" component={WetherScreen} />
        <Stack.Screen name="CreateData" component={CreateData} />

        <Stack.Screen name="DataView" component={DataView} />
      </Stack.Navigator>
    </NavigationContainer>
  );


};

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 5,
  },
  buttonContainer: {
    padding: 10,
    shadowColor: '#000000',
    width: 150,
    marginLeft: 120
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  view1: { flexDirection: 'row' },
  view3: { marginLeft: 120 },

  view2: {
    fontSize: 15, marginLeft: 220, marginTop: 15, fontWeight: '600', color: Colors.black
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputSmall: {
    height: 40,
    width: 150,

    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};
export default App;
