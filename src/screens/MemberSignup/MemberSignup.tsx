import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { router } from 'expo-router';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import DateInput from '@/components/DateInput/DateInput';
import { styles } from './styles';

export const MemberSignup = () => {
    const handleGoBack = () => {
        router.back();
    };
    const handleMemberSignup = () => {
        router.push('/(tabs)/Home');
    };
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
            <View style={styles.container}>
                <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
                <Text style={styles.title}>Cadastre seu familiar</Text>
                <View style={styles.inputsContainer}>
                    <Input icon="person" placeholder="Nome completo" keyboardType="default" />
                    <DateInput placeholder="Data de nascimento (DD/MM/AAAA)" />
                    <Input icon="id-card" placeholder="CPF" keyboardType="numeric" />
                    <Input icon="medkit" placeholder="Plano de saúde" />
                    <Input icon="call" placeholder="Contato de emergência" keyboardType="numeric" />
                    <Input icon="medical" placeholder="Condições médicas" />
                </View>
                <View style={styles.buttonsContainer}>
                    <Button text="Cadastrar" variant="primary" style={{ width: '50%' }} onPress={handleMemberSignup} />
                    <Button text="Voltar" variant="secondary" style={{ width: '50%' }} onPress={handleGoBack} />
                </View>
            </View>
        </ScrollView>
    );
};
