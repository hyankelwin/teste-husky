import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Initial from '../pages/Initial';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#FFFFFF' },
    }}
    initialRouteName="Initial"
  >
    <Auth.Screen name="Initial" component={Initial} />
  </Auth.Navigator>
);

export default AuthRoutes;
