import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import Input from '../components/Input';
import Button from '../components/Button';

export default function Login() {
    const router = useRouter();
    const handleLogin = () => {
        router.push('/Home'); // router.replace('/Home');
    };
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../assets/images/logo.png')} style={styles.logo} />
            <View style={styles.inputsContainer}>
                <Input icon="mail" placeholder="E-mail" keyboardType="email-address" />
                <Input icon="lock-closed" placeholder="Senha" secureTextEntry />
                <TouchableOpacity style={styles.forgotPasswordButton}>
                    <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
                <Button text="Login" variant="primary" style={{ width: '50%' }} onPress={handleLogin} />
                <Button text="Cadastre-se" variant="secondary" style={{ width: '50%' }} />
            </View>
        </SafeAreaView>
    );
}
