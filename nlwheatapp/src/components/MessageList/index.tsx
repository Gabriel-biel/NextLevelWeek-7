import React from 'react';

import { ScrollView } from 'react-native';

import { styles } from './styles';
import { Message } from '../Message'

export function MessageList(){
  const message = {
    id: '1',
    text: 'Messagem de Teste',
    user: {
      name: 'Gabriel',
      avatar_url: "https://github.com/Gabriel-biel.png"
    }
  }

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps='never'
    >
      <Message data={message}/>
      <Message data={message}/>
      <Message data={message}/>
    </ScrollView>
  );
}