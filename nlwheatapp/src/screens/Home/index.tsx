import React from 'react';
import { View } from 'react-native';
import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList'
import { SendMessageForm } from '../../components/SendMessageForm';
import { SigninBox } from '../../components/SigninBox';


import { Styles } from './styles';

export function Home() {
  return (
    <View style={Styles.container}>
      <Header />
      <MessageList />
      <SendMessageForm />
    </View>
  )
}