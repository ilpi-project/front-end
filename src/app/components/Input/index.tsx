import { Text, TextInput, TextInputProps, View } from 'react-native';
import React from 'react';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import colors from '@/app/config/colors';

interface InputProps extends TextInputProps {
    icon?: keyof typeof Ionicons.glyphMap;
    showPasswordIcon?: keyof typeof Ionicons.glyphMap;
    onShowPasswordIconPress?: () => void;
}

const Input = ({ icon, showPasswordIcon, onShowPasswordIconPress, ...props }: InputProps) => {
    return (
        <View style={styles.container}>
            {icon && <Ionicons name={icon} size={24} color={colors.green[800]} style={styles.icon} />}
            <TextInput {...props} style={styles.input} />
            {showPasswordIcon && <Ionicons name={showPasswordIcon} size={24} color={colors.green[800]} onPress={onShowPasswordIconPress} />}
        </View>
    );
};

export default Input;
