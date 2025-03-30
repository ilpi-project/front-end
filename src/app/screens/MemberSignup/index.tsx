import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles';
import Input from '@/app/components/Input';
import DateInput from '@/app/components/DateInput';
import Button from '@/app/components/Button';
import { router } from 'expo-router';

export default function MemberSignup() {
    const handleGoBack = () => {
        router.back();
    };
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps='handled'>
            <View style={styles.container}>
                <Image source={require('@/app/assets/images/logo.png')} style={styles.logo} />
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
                    <Button text="Cadastre-se" variant="primary" style={{ width: '50%' }} />
                    <Button text="Voltar" variant="secondary" style={{ width: '50%' }} onPress={handleGoBack} />
                </View>
            </View>
        </ScrollView>
    );
}
