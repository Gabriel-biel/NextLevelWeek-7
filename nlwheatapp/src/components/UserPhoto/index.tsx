import React from 'react';

import {
  Image
} from 'react-native';

import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS } from '../../theme'
import avatarImage from '../../assets/avatar.png'

const SIZES = {
  SMALL: {
    containerSize: 32,
    avatarSize: 28
  },
  NORMAL: {
    containerSize: 48,
    avatarSize: 42
  }
}

type Props = {
  imageUri: string | undefined;
  sizes?: 'SMALL' | 'NORMAL';
}

const AVATAR_DEFAULT = Image.resolveAssetSource(avatarImage).uri;

export function UserPhoto({ imageUri, sizes = 'NORMAL'}: Props){
  const { containerSize, avatarSize } = SIZES[sizes];

  return (
    <LinearGradient
      colors={[COLORS.PINK, COLORS.YELLOW]}
      style={[
        styles.container,
        {
          width: containerSize,
          height: containerSize,
          borderRadius: containerSize /2
        }
      ]}
    >

    <Image source={{ uri: imageUri || AVATAR_DEFAULT }}
      style={[
        styles.avatar,
        {
          width: avatarSize,
          height: avatarSize,
          borderRadius: avatarSize /2
        }
      ]}
      />
      </LinearGradient>
  );
}