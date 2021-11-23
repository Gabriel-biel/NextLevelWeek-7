import React, { useState }  from 'react';

import {
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export function SendMessageForm(){
  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);

  return (
    
    // <KeyboardAvoidingView
      // behavior={Platform.OS === "ios" ? "padding" : "height"} enabled 
      // contentContainerStyle={styles.container}>
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
      />
    </View>
        // </KeyboardAvoidingView>
    
        
  );
}