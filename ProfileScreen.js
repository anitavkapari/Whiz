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

const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };




  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.sectionContainer}>
          <View style={{marginTop:10}}>
          <Button title="Press me" accessibilityLabel="Tap on Me"
          onPress={() => console.log("hhhhh")}          />
          </View>
          <View style={{marginTop:10}}>
          <Button title="Press me" accessibilityLabel="Tap on Me" />

          </View>
          <View style={{marginTop:10}}>
          <Button title="Press me" accessibilityLabel="Tap on Me" />

          </View>
          <View style={{marginTop:10}}>
          <Button title="Press me" accessibilityLabel="Tap on Me" />

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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

export default App;
