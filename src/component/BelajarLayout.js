import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';


const sunset = require('../images/Sunset.png');
const sunrise = require('../images/sunrise.png');
const humadity = require('../images/humidity.png');
const presure = require('../images/Pressure.png');
const temp = require('../images/temp.png');
const main = require('../images/main.png');
const windspeed = require('../images/windspeed.png');
const sealevel = require('../images/sealevel.png');
const groundlevel = require('../images/sealevel2.png');
const city = require('../images/city.png');

export default class BelajarLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: ' ',
        description: ' ',
        temp: ' ',
        windspeed: ' ',
        sunrise: ' ',
        sunset: ' ',
        presure: ' ',
        humadity: ' ',
        sealevel: ' ',
        groundlevel: ' ',
      }
    };
  }
  async getWeather() {
    try {
      let response = await fetch(
        'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=40722390ec41525035980b5536bbe38b&units=metric'
    );
    let responseJson = await response.json();
    return this.setState({
      forecast: {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp,
        windspeed: responseJson.wind.speed,
        sunrise: responseJson.sys.sunrise,
        sunset: responseJson.sys.sunset,
        presure: responseJson.main.pressure,
        humidity: responseJson.main.humidity,
        sealevel: responseJson.main.sea_level,
        groundlevel: responseJson.main.grnd_level,
      }
    });
  } catch (error) {
    console.error(error);
  }
}
  render() {
    return (
      <View style={styles.containerMain}>

        <View style={styles.box1}>
            <Text style={styles.text} > Prakiraan Cuaca </Text>
        </View>

        <View style={styles.box2}>
            <Text style={styles.text} > Masukan Nama Kota </Text>
            <View style={{ marginLeft: 50, marginRight: 50, padding: 10, backgroundColor: 'white' }}>
              <TextInput
              style={{ height: 40 }}
                onChangeText={(city) => this.setState({ city })}
              />
            </View>
            <View style={{ marginTop: 10, marginLeft: 50, marginRight: 50, padding: 1 }}>
              <Button
                onPress={
                  () => this.getWeather()
                }
                title="Lihat"
                accessibilityLabel="Klik untuk melihat"
              />
            </View>
        </View>

        <View style={styles.box3}>
          <View style={{ marginLeft: 10, marginRight: 10 }}>
            <View sytle={styles.iconContainer}>
              <Image source={city} style={styles.icon} />
            </View>
              <Text style={{ fontSize: 20 }}>
                City: {this.state.city} {'\n'}
              </Text>
            </View>
        </View>

        <View style={styles.box3}>
          <View style={styles.box4}>
            <View sytle={styles.iconContainer}>
              <Image source={temp} style={styles.icon} />
            </View>
              <Text>
                Temp{'\t'}{'\t'}: {this.state.forecast.temp} {'\n'}
              </Text>
          </View>
          <View style={styles.box4}>
            <View sytle={styles.iconContainer}>
              <Image source={main} style={styles.icon} />
            </View>
            <Text>
              Main{'\t'}{'\t'}: {this.state.forecast.main} {'\n'}
            </Text>
          </View>
        </View>

        <View style={styles.box3}>
          <View style={styles.box4}>
            <View sytle={styles.iconContainer}>
              <Image source={windspeed} style={styles.icon} />
            </View>
              <Text>
                Wind Speed{'\t'}{'\t'}: {this.state.forecast.windspeed}{'\n'}
              </Text>
          </View>
          <View style={styles.box4}>
            <View sytle={styles.iconContainer}>
              <Image source={main} style={styles.icon} />
            </View>
            <Text>
              Desc{'\t'}{'\t'}: {this.state.forecast.description} {'\n'}
            </Text>
          </View>
        </View>

        <View style={styles.box3}>
          <View style={styles.box4}>
              <View sytle={styles.iconContainer}>
                <Image source={sunrise} style={styles.icon} />
              </View>
              <Text>
                Sunrise{'\t'}{'\t'}: {this.state.forecast.sunrise} {'\n'}
              </Text>
          </View>
          <View style={styles.box4}>
            <View sytle={styles.iconContainer}>
              <Image source={sunset} style={styles.icon} />
            </View>
            <Text>
              Sunset{'\t'}{'\t'}: {this.state.forecast.sunset} {'\n'}
            </Text>
          </View>
        </View>

        <View style={styles.box3}>
          <View style={styles.box4}>
            <View sytle={styles.iconContainer}>
              <Image source={humadity} style={styles.icon} />
            </View>
              <Text>
                Humadity{'\t'}{'\t'}: {this.state.forecast.humidity} {'\n'}
              </Text>
          </View>
          <View style={styles.box4}>
            <View sytle={styles.iconContainer}>
              <Image source={presure} style={styles.icon} />
            </View>
            <Text>
              Presure{'\t'}{'\t'}: {this.state.forecast.presure} {'\n'}
            </Text>
          </View>
        </View>

        <View style={styles.box3}>
          <View style={styles.box4}>
              <View sytle={styles.iconContainer}>
                <Image source={sealevel} style={styles.icon} />
              </View>
              <Text>
                Sea Level{'\t'}{'\t'}: {this.state.forecast.sealevel} {'\n'}
              </Text>
          </View>
          <View style={styles.box4}>
            <View sytle={styles.iconContainer}>
              <Image source={groundlevel} style={styles.icon} />
            </View>
            <Text>
              Ground Level{'\t'}{'\t'}: {this.state.forecast.groundlevel} {'\n'}
            </Text>
          </View>
        </View>

        <View style={styles.box1}>
            <Text style={styles.text} >copyright @Whidi Harta</Text>
        </View>

  </View>
      );
    }
  }
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#BBDEFB',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 0.15,
    backgroundColor: 'green',
  },
  box2: {
    flex: 0.5,
    backgroundColor: 'green',
    margin: 20
  },
  box3: {
    flex: 0.2,
    backgroundColor: '#BBDEFB',
    //margin: 10,
    padding: 5,
    marginLeft: 20,
    marginRight: 20,

    //marginRight: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  box4: {
    flex: 5,
    backgroundColor: 'green',
    //marginTop: 10,
    margin: 30,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },

  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    textAlign: 'center',
    color: 'white',
    padding: 17,
    fontSize: 20
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: 'orange',
    borderColor: 'orange',
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: 'center',
    height: 50,
    width: 50,
  },
  icon: {
    tintColor: 'orange',
    height: 40,
    width: 40,
  }
});
