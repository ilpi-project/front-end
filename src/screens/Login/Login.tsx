import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from '@/config/api';
import { styles } from './styles';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const router = useRouter();

    const handleLogin = async () => {
        try {
            setErrorMessage('');
            const response = await axios.post(`${API_BASE_URL}/users/login`, {
                email: email.trim(),
                password: password.trim(),
            });
            await AsyncStorage.setItem('userToken', response.data.token);
            await AsyncStorage.setItem('userId', response.data.userId);
            router.replace('/(tabs)/Home');
        } catch (e) {
            setErrorMessage('E-mail ou senha inválidos');
        }
    };
    const handleSignup = () => {
        router.push('/Signup');
    };
    return (
        <View style={styles.container}>
            <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
            <View style={styles.inputsContainer}>
                <Input
                    icon="mail"
                    placeholder="E-mail"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
                <Input
                    icon="lock-closed"
                    placeholder="Senha"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                    showPasswordIcon={showPassword ? 'eye-off' : 'eye'}
                    onShowPasswordIconPress={() => setShowPassword((prev) => !prev)}
                />
                <View style={styles.errorMessageContainer}>
                    {errorMessage ? <Text style={styles.errorMessageText}>{errorMessage}</Text> : null}
                </View>

                <TouchableOpacity style={styles.forgotPasswordButton}>
                    <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
                <Button text="Login" variant="primary" style={{ width: '50%' }} onPress={handleLogin} />
                <Button text="Cadastre-se" variant="secondary" style={{ width: '50%' }} onPress={handleSignup} />
            </View>
        </View>
    );
};
