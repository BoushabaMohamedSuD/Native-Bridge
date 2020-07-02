/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,

} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import ToastExample from './assets/ToastExample';
import NotifExample from './assets/NotifExample';

import BluetoothModule from './assets/BluetoothModule';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';



import { NativeEventEmitter, NativeModules } from 'react-native';


class App extends Component {

  //const [text, addText] = useState(["Hello"]);
  //const [counter, setCounter] = useState(0);

  constructor(props){
    super(props);

    this.state = {
      text: "Nothing"
    }
    
  }
  
  componentDidMount() {
    
    const eventEmitter = new NativeEventEmitter(NativeModules.ToastExample);
    this.eventListener = eventEmitter.addListener('EventReminder', (event) => {
      console.log(event)
      console.log("event: "+event.bluetooth) 

      let message = event.bluetooth;
      this.setState({
        text: message
      });
    });
    
  }
  
  onPress = () => {
    console.log("Press");
    text.push("Awesome" + " " + counter);
    //addText(text);
   // setCounter(counter + 1);
    ToastExample.show('Awesome', ToastExample.SHORT);


  }

  TurnOn = () => {
    ToastExample.show('Turn On', ToastExample.SHORT);
    BluetoothModule.turnOn();


  }
  TurnOff = () => {

    BluetoothModule.turnOff();
    ToastExample.show('Turn Off', ToastExample.SHORT);

  }
  render(){
     return (
    <>
      <ImageBackground source={require('./images/textured.jpg')} style={{
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
      }} >
         <View style={styles.container}>
        <Image
          source={require('./images/logo.png')}
          style={{
            width: 220,
            height: 220,
            marginTop: 0,
            marginRight: 'auto',
            marginBottom: 0,
            marginLeft: 'auto',
            resizeMode: 'stretch',
          

          }} />
        <Text style={{
          marginTop: 0,
          marginRight: 'auto',
          marginBottom: 0,
          marginLeft: 'auto',
            fontWeight: 'bold',
            fontSize: 40,
            color:"green"
        }}>Wawashi!
         
        </Text>
        <Text style={{
          marginTop: 0,
          marginRight: 'auto',
          marginBottom: 0,
          marginLeft: 'auto',
            fontSize: 10,
            color: "#f0f8ff"

        }}>
          Une application qui fait gagner du temps et de 
      </Text>   
        <Text style={{
          marginTop: 0,
          marginRight: 'auto',
          marginBottom: 0,
          marginLeft: 'auto',
            fontSize: 10,
            color: "#f0f8ff"

        }}>
          l’argent
      </Text>   
        <View style={{
          height: 20,
        }}></View>
        <Button
          style={{
            marginTop: "20%"
          }}
          onPress={this.onPress}
          title="add random text"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <View style={{
          height: 20,
        }}></View>
        <Button
          style={{
            marginTop: "20%"
          }}
          onPress={this.TurnOn}
          title="Turn On Bleutooth"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <View style={{
          height: 20,
        }}></View>
        <Button
          style={{
            marginTop: "20%"
          }}
          onPress={this.TurnOff}
          title="Turn Off Bleutooth"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <View
          style={{
            marginTop: 30,
            marginRight: 'auto',
            marginBottom: 0,
            marginLeft: 'auto',
          }}>
            <Text>
                 {this.state.text}
            </Text>

        

        </View>


      </View>
        </ImageBackground>
     


    </>
  );
    
  }

 
};

const styles = StyleSheet.create({

  container: {
    width: "80%",
    height: "100%",
    marginTop: "20%",
    marginLeft: "10%",
    marginRight: "10%"

  },
  elem: {
    marginTop: "20%"
    // ma,rginBottome: "5%"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  }

});

export default App;
