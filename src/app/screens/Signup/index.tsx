import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import styles from './styles';
import { View, Image, TextInput, Text } from 'react-native';
import Input from '@/app/components/Input';
import Button from '@/app/components/Button';
import { Ionicons } from '@expo/vector-icons';
import colors from '@/app/config/colors';

export default function Signup() {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    const [birthDate, setBirthDate] = useState('');

    const handleDateChange = (text: string) => {
        let formattedText = text.replace(/[^0-9]/g, '');

        if (formattedText.length <= 2) {
            formattedText = formattedText.replace(/(\d{2})/, '$1');
        } else if (formattedText.length <= 4) {
            formattedText = formattedText.replace(/(\d{2})(\d{1,2})/, '$1/$2');
        } else {
            formattedText = formattedText.replace(/(\d{2})(\d{2})(\d{1,4})/, '$1/$2/$3');
        }

        setBirthDate(formattedText);
    };

    return (
        <View style={styles.container}>
            <Image source={require('@/app/assets/images/logo.png')} style={styles.logo} />
            <Text style={styles.title}>Crie sua conta</Text>
            <View style={styles.inputsContainer}>
                <Input icon="person" placeholder="Nome" keyboardType="default" />
                <Input icon="mail" placeholder="E-mail" keyboardType="email-address" />
                <View style={styles.dateInputContainer}>
                    <Ionicons name="calendar" size={24} color={colors.green[800]} style={{ marginRight: 8 }} />

                    <TextInput
                        style={styles.dateInput}
                        placeholder="Data de Nascimento (DD/MM/AAAA)"
                        value={birthDate}
                        onChangeText={handleDateChange}
                        keyboardType="numeric"
                        maxLength={10}
                    />
                </View>

                <Input icon="lock-closed" placeholder="Senha" secureTextEntry />
                <Input icon="lock-closed" placeholder="Confirmar senha" secureTextEntry />
            </View>
            <View style={styles.buttonsContainer}>
                <Button text="Cadastre-se" variant="primary" style={{ width: '50%' }} />
                <Button text="Voltar" variant="secondary" style={{ width: '50%' }} onPress={handleGoBack} />
            </View>
        </View>
    );
}
