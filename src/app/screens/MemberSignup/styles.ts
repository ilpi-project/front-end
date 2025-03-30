import colors from '@/app/config/colors';
import FONT from '@/app/config/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: colors.beige,

    },
    container: {
        backgroundColor: colors.beige,
        width: '100%',
        alignItems: 'center',
    },
    logo: {
        height: 180,
        width: 180,
        marginBottom: 20,
        marginTop: 44,
    },
    title: {
        fontSize: 20,
        fontFamily: FONT.OXYGEN_BOLD,
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

export default styles;
