import { StyleSheet } from 'react-native';
import COLORS from '@/config/colors';
import FONTS from '@/config/fonts';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        gap: 16,
        marginTop: 52,
    },
    title: {
        fontSize: 24,
        color: COLORS.black,
        fontFamily: FONTS.OXYGEN_BOLD,
    },
    line: {
        height: 2,
        backgroundColor: COLORS.green[800],
    },
});
