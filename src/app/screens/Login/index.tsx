import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './styles';
import Input from '@/app/components/Input';
import Button from '@/app/components/Button';

export default function Login() {
    const router = useRouter();
    const handleLogin = () => {
        router.push('/screens/Home'); // router.replace('/Home');
    };
    const handleSignup = () => {
        router.push('/screens/Signup');
    };
    return (
        <View style={styles.container}>
            <Image source={require('@/app/assets/images/logo.png')} style={styles.logo} />
            <View style={styles.inputsContainer}>
                <Input icon="mail" placeholder="E-mail" keyboardType="email-address" />
                <Input icon="lock-closed" placeholder="Senha" secureTextEntry />
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
}
