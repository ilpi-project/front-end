import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '@/config/colors';

interface InputProps extends TextInputProps {
    icon?: keyof typeof Ionicons.glyphMap;
    showPasswordIcon?: keyof typeof Ionicons.glyphMap;
    onShowPasswordIconPress?: () => void;
}

export default function Input({ icon, showPasswordIcon, onShowPasswordIconPress, ...props }: InputProps) {
    return (
        <View style={styles.container}>
            {icon && <Ionicons name={icon} size={24} color={COLORS.green[800]} style={styles.icon} />}
            <TextInput {...props} style={styles.input} />
            {showPasswordIcon && (
                <Ionicons
                    name={showPasswordIcon}
                    size={24}
                    color={COLORS.green[800]}
                    onPress={onShowPasswordIconPress}
                />
            )}
        </View>
    );
};
