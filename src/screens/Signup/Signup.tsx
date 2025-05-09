import React from 'react';
import { View, Image, Text } from 'react-native';
import { useRouter } from 'expo-router';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import DateInput from '@/components/DateInput/DateInput';
import { styles } from './styles';

export const Signup = () => {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    const handleGoToMemberSignupPage = () => {
        router.push('/MemberSignup');
    };

    return (
        <View style={styles.container}>
            <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
            <Text style={styles.title}>Crie sua conta</Text>
            <View style={styles.inputsContainer}>
                <Input icon="person" placeholder="Nome" keyboardType="default" />
                <Input icon="mail" placeholder="E-mail" keyboardType="email-address" />
                <DateInput placeholder="Data de nascimento (DD/MM/AAAA)" />
                <Input icon="lock-closed" placeholder="Senha" secureTextEntry />
                <Input icon="lock-closed" placeholder="Confirmar senha" secureTextEntry />
            </View>
            <View style={styles.buttonsContainer}>
                <Button
                    text="Cadastre-se"
                    variant="primary"
                    style={{ width: '50%' }}
                    onPress={handleGoToMemberSignupPage}
                />
                <Button text="Voltar" variant="secondary" style={{ width: '50%' }} onPress={handleGoBack} />
            </View>
        </View>
    );
};
