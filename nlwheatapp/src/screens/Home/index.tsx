import React from 'react';
import { View, Text } from 'react-native';
import { Header } from '../../components/Header';

import { Styles } from './styles';

export function Home() {
  return (
    <View style={Styles.container}>
      <Header />
    </View>
  )
}