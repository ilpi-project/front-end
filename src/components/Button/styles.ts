import { StyleSheet } from 'react-native';
import FONTS from '@/config/fonts';
import COLORS from '@/config/colors';

export const styles = StyleSheet.create({
    button: {
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    text: {
        fontFamily: FONTS.OXYGEN_BOLD,
    },
    primary: {
        backgroundColor: COLORS.green[800],
    },
    secondary: {
        backgroundColor: 'transparent',
    },
    textPrimary: {
        fontSize: 20,
        color: COLORS.white,
    },
    textSecondary: {
        fontSize: 20,
        color: COLORS.black,
    },
});
