
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './Store';
import React from 'react';
import {Provider} from 'react-redux';
import {StyleSheet,Button, View,TouchableOpacity} from 'react-native';
import Navigation from './Navigation';
import SplashScreen from 'react-native-splash-screen';
export default function App() {
  return (
    <Provider store={store} > 
      <PersistGate persistor={persistor}>
        <Navigation/>
      </PersistGate>
    </Provider>
  );
}




