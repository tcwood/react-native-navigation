import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

// This is just a simple screen that is passed into the navigator
class App extends React.Component {
  static navigationOptions = {
    title: 'Welcome there',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up main.js to start working on your app!</Text>
      </View>
    );
  }
}

// This navigator is what gets registered by Expo!
const SimpleApp = StackNavigator({
  Home: { screen: App },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(SimpleApp);
