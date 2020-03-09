import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './components/Landing'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Landing">
        <Stack.Screen
            name="Landing" component={Landing}/>
        <Stack.Screen
            name="SignIn" component={SignIn}/>
        <Stack.Screen
            name="SignUp" component={SignUp}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
