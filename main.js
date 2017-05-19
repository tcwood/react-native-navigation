import Expo from 'expo';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

// This is just a simple screen that is passed into the navigator
class App extends React.Component {
  static navigationOptions = {
    title: 'Welcome there',
  };

  render() {
    // navigation helpers come in to elements as props
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Open up main.js to start working on your app!</Text>
        <Button
          onPress={() => navigate('Chat')}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy right now!',
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    )
  }
}

// This navigator is what gets registered by Expo!
const SimpleApp = StackNavigator({
  // Each of the screens has to correspond with the actual component
  Home: { screen: App },
  Chat: { screen: ChatScreen }
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
