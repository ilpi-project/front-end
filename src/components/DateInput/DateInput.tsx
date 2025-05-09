import React, { useState } from 'react';
import { View, TextInputProps, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import COLORS from '@/config/colors';

interface DateInputProps extends TextInputProps {
    icon?: keyof typeof Ionicons.glyphMap;
}

export default function DateInput({ icon = 'calendar', ...props }: DateInputProps) {
    const [date, setDate] = useState('');

    const handleDateChange = (text: string) => {
        let formattedText = text.replace(/[^0-9]/g, '');

        if (formattedText.length <= 2) {
            formattedText = formattedText.replace(/(\d{2})/, '$1');
        } else if (formattedText.length <= 4) {
            formattedText = formattedText.replace(/(\d{2})(\d{1,2})/, '$1/$2');
        } else {
            formattedText = formattedText.replace(/(\d{2})(\d{2})(\d{1,4})/, '$1/$2/$3');
        }

        setDate(formattedText);
    };

    return (
        <View style={styles.dateInputContainer}>
            <Ionicons name="calendar" size={24} color={COLORS.green[800]} style={{ marginRight: 8 }} />
            <TextInput
                style={styles.dateInput}
                value={date}
                onChangeText={handleDateChange}
                keyboardType="numeric"
                maxLength={10}
                {...props}
            />
        </View>
    );
}
