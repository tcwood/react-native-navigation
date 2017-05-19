import Expo from 'expo';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

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
        <Button
          onPress={() => navigate('Lunch', { user: 'Fredericsir' })}
          title="Lunch with Frederic"
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

class LunchScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Get some food with ${navigation.state.params.user}`,
  });
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Lunch with {params.user}</Text>
      </View>
    )
  }
}

class RecentEventsScreen extends React.Component {
  render() {
    return <Text>All them recent events</Text>
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return <Text>List of all contactes </Text>
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentEventsScreen },
  All: { screen: AllContactsScreen },
});

// This navigator is what gets registered by Expo!
const SimpleApp = StackNavigator({
  // Each of the screens has to correspond with the actual component
  Home: { screen: App },
  Chat: { screen: ChatScreen },
  Lunch: { screen: LunchScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(MainScreenNavigator);
