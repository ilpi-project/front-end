import colors from '@/app/config/colors';
import FONT from '@/app/config/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        gap: 16,
        marginTop: 52,
    },
    title: {
        fontSize: 24,
        color: colors.black,
        fontFamily: FONT.OXYGEN_BOLD,
    },
    line: {
        height: 2,
        backgroundColor: colors.green[800],
    },
});

export default styles;
