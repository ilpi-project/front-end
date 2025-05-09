import { StyleSheet } from 'react-native';
import COLORS from '@/config/colors';
import FONTS from '@/config/fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: COLORS.beige,
    },
    logo: {
        height: 180,
        width: 180,
        marginBottom: 20,
        marginTop: 44,
    },
    title: {
        fontSize: 20,
        fontFamily: FONTS.OXYGEN_BOLD,
    },
    inputsContainer: {
        width: '75%',
    },
    buttonsContainer: {
        width: '100%',
        paddingHorizontal: 36,
        paddingVertical: 40,
        alignItems: 'center',
        flexDirection: 'column',
        gap: 16,
    },
});
