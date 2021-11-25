import { dismiss } from 'expo-auth-session';
import React, { useState }  from 'react';

import {
  View,
  TextInput,
  Alert,
  Keyboard
} from 'react-native';
import { api } from '../../services/api';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export function SendMessageForm(){
  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);

  async function handleMessageSubmit() {
    const messageFormatted = message.trim();

    if(messageFormatted.length > 0) {
      setSendingMessage(true);
      await api.post('/messages', {message: messageFormatted});

      setMessage('');
      Keyboard.dismiss();
      setSendingMessage(false);
      Alert.alert('Menssagem Enviada Com Sucesso');
    }else {
      Alert.alert("Escreva a Menssagem para enviar!");
    }
  }

  return (
    
    <View style={styles.container}>

      <TextInput 
        keyboardAppearance="dark"
        placeholder="Qual a sua Espectativa para o Evento?"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        style={styles.input}
        editable={!sendingMessage}
        />

      <Button 
        title={"Enviar Menssagem"}
        backgroundColor={COLORS.PINK}
        color={COLORS.WHITE}
        isLoading={sendingMessage}
        onPress={handleMessageSubmit}
        />
    </View>
        
  );
}