import React from 'react';

import { Button } from '../../components/Button'

import {
  View
} from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../theme';

export function SigninBox(){
  return (
    <View style={styles.container}>
      <Button 
        title="Entrar Com Github"
        color={COLORS.BLACK_PRIMARY}  
        backgroundColor={COLORS.YELLOW}
        icon="github"
      />
    </View>
  );
}