import { Text, TouchableOpacity, ViewStyle, StyleProp } from 'react-native';
import styles from './styles';
import React from 'react';

interface ButtonProps {
    text: string;
    variant: 'primary' | 'secondary';
    style?: StyleProp<ViewStyle>; 
    onPress?: () => void;
}

export default function Button({ text, variant, style, onPress }: ButtonProps) {
    return (
        <TouchableOpacity
            style={[styles.button, variant === 'primary' ? styles.primary : styles.secondary, style]} 
            onPress={onPress}>
            <Text style={[styles.text, variant === 'primary' ? styles.textPrimary : styles.textSecondary]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}
