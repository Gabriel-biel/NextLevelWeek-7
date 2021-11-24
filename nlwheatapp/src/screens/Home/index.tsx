import React from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList'
import { SendMessageForm } from '../../components/SendMessageForm';
import { SigninBox } from '../../components/SigninBox';


import { Styles } from './styles';

export function Home() {
  return (
    // <KeyboardAvoidingView
      // style={{ flex: 1 }}
      // behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    // >
    <View style={Styles.container}>
      <Header />
      <MessageList />
      <SigninBox />
    </View>
    // </KeyboardAvoidingView>
  )
};