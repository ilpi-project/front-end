import { StyleSheet } from 'react-native';
import FONT from '@/app/config/fonts';
import colors from '@/app/config/colors';

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
        backgroundColor: colors.green[800],
    },
    secondary: {
        backgroundColor: 'transparent',
    },
    textPrimary: {
        fontSize: 20,
        color: colors.white,
    },
    textSecondary: {
        fontSize: 20,
        color: colors.black,
    },
});

export default styles;
