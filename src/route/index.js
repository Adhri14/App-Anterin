import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { GetStarted, Home, Notification, Setting, SignUp } from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Notification" component={Notification} />
    <Tab.Screen name="Setting" component={Setting} />
  </Tab.Navigator>
  )
}

const Route = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}} />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Route;
