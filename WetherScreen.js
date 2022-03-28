import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Proptypes from 'prop-types'
import { weatherConditions } from './utils/WeatherCondition'
import GeoLocation from '@react-native-community/geolocation';
import { API_KEY } from './utils/WeatherAPIKey';

navigator.geolocation = require('@react-native-community/geolocation');


const Weahter = ({ weather, temperature }) => {
    return (
        <View style={[styles.weatherContainer, { backgroundColor: weatherConditions[weather].color }]}>
            <View style={styles.headerContainer}>
                <Text style={styles.tempText}>{temperature}°</Text>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.title}>{weatherConditions[weather].title}</Text>
                <Text style={styles.subtitle}>{weatherConditions[weather].subtitle}</Text>
            </View>
        </View> 
    )
};

Weahter.Proptypes = {
    temperature: Proptypes.number.isRequired,
    weather: Proptypes.string
}


const styles = StyleSheet.create({
    weatherContainer: {
        flex: 1
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    tempText: {
        fontSize: 72,
        color: '#fff'
    },
    bodyContainer: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        marginBottom: 40
    },
    title: {
        fontSize: 60,
        color: '#fff'
    },
    subtitle: {
        fontSize: 24,
        color: '#fff'
    }
})
export default Weahter;

class App extends React.Component {
  state = {
    isLoading: false,
    temperature: 26,
    weatherCondition: 'Clear',
    error: null
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({ error: 'Error While Getting Weather Update' });
      }
    );
  }

  getWeather(lat = 25, lon = 25) {
    console.log(lat, lon, 'lat,lon')
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    ).then(resp => resp.json())
      .then(json => {
        //console.log(json,'weather');
        this.setState({
          temperature: Math.round(json.main.temp).toFixed(),
          weatherCondition: json.weather[0].main,
          isLoading: false
        })
      })
  }
  render() {
    const { temperature, weatherCondition, isLoading } = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? <Text>Getting Weather Data</Text> :
          <Weather weather={weatherCondition} temperature={temperature} />

        }
      </View>
    )
  }
}