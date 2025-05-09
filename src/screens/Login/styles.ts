import { StyleSheet } from 'react-native';
import COLORS from '@/config/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.beige,
    },
    logo: {
        height: 200,
        width: 200,
        marginBottom: 20,
    },
    inputsContainer: {
        width: '75%',
    },
    forgotPasswordButton: {
        backgroundColor: 'transparent',
        marginTop: 8,
    },
    forgotPasswordText: {
        color: COLORS.black,
        textAlign: 'right',
    },
    errorMessageContainer: {
        justifyContent: 'center',
        height: 35,
    },
    errorMessageText: {
        color: COLORS.red,
    },
    buttonsContainer: {
        width: '100%',
        paddingHorizontal: 36,
        paddingVertical: 40,
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
        top: 50,
        gap: 16,
    },
});
