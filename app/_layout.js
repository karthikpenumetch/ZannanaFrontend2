import React from 'react'
import { Stack } from 'expo-router';

const Layout = () => {
   return <Stack />; 
}

export default Layout;

/*
import React from 'react';
import { Stack } from 'expo-router';
import App from './index'; // Assuming your Home component is defined in index.js
import Login from './Login';
import About from './About';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" component={App} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="About" component={About} />
    </Stack>
  );
};


export default Layout;
*/

