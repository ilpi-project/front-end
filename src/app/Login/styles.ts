import { StyleSheet } from 'react-native';
import colors from '../config/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.beige,
    },
    logo: {
        height: 200,
        width: 200,
        marginBottom: 20
    },
    inputsContainer: {
        width: '75%',
    },
    forgotPasswordButton: {
        backgroundColor: 'transparent',
        marginTop: 12,
    },
    forgotPasswordText: {
        color: colors.black,
        textAlign: 'right',
    },
    buttonsContainer: {
        width: '100%',
        paddingHorizontal: 36,
        paddingVertical: 40,
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
        top: 50,
        gap: 16
    },
});

export default styles;
