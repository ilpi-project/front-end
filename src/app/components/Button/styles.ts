import { StyleSheet } from 'react-native';
import FONT from '@/app/config/fonts';

const styles = StyleSheet.create({
    button: {
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    text: {
        fontFamily: FONT.OXYGEN_BOLD,
    },
    primary: {
        backgroundColor: '#2E5E3D',
    },
    secondary: {
        backgroundColor: 'transparent',
    },
    textPrimary: {
        fontSize: 20,
        color: '#fff',
    },
    textSecondary: {
        fontSize: 18,
        color: '#333734',
    },
});

export default styles;
