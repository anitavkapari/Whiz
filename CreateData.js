/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
import React, {  useState } from 'react';
import {useRoute} from '@react-navigation/native';



const CreateData = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [weight, setWeight] = useState('');
  const onOrderSubmit = (navigation) => ({
    weight: weight,
  },
  navigation.Navigator('')
  )

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.sectionContainer}>
          <View style={{ marginTop: 10 }}>
          <View style={styles.viewContainer}>
          <TextInput
                            placeholder="1kg"
                            style={styles.textInput}
                            autoCapitalize="none"
                            keyboardType="numeric"
                            onChangeText={(val) => setWeight(val)}
                        />
                    </View>
         
                    <View style={styles.button}>
              <TouchableOpacity
                style={styles.signIn}
                onPress={() => navigation.navigate("DataView")}>
                <Text style={[styles.textSign, {
                  color: '#fff'
                }]}>Click me</Text>
                </TouchableOpacity>
          </View>
        </View>
             </View>
    </ScrollView>
  </SafeAreaView >
 
 );
 

};

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 5,
  },
  viewContainer: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
},
textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
},
  button: {
    alignItems: 'center',
    marginTop: 10,
    backgroundColor:'lightblue'
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,

    
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

export default CreateData;
