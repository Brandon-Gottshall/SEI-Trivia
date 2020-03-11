import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './components/Landing'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import UserHome from './components/UserHome'
import CategorySelector from './components/CategorySelector'
import UnitSelector from './components/UnitSelector'
import ProfileSettings from './components/ProfileSettings'
import Game from './components/Game'
import Loading from './components/Loading'
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
        <Stack.Screen
            name="UserHome" component={UserHome}/>
        <Stack.Screen
            name="ProfileSettings" component={ProfileSettings}/>
        <Stack.Screen
            name="UnitSelector" component={UnitSelector}/>
        <Stack.Screen
            name="CategorySelector" component={CategorySelector}/>
        <Stack.Screen
            name="Loading" component={Loading}/>
        <Stack.Screen
            name="Game" component={Game}/>
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
