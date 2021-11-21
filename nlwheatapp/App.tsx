import { 
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
 } from "@expo-google-fonts/roboto"

 import { StatusBar } from 'expo-status-bar'

import AppLoading from "expo-app-loading";

import React from 'react';
import { Home } from './src/screens/Home'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if(!fontsLoaded) {
    <AppLoading />
  }

  return (
    <>
      <StatusBar style="light"/>
      <Home />
    </>
  );
}
