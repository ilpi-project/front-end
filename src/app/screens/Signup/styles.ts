import { StyleSheet } from 'react-native';
import colors from '@/app/config/colors';
import FONT from '@/app/config/fonts';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.beige,
    },
    logo: {
        height: 180,
        width: 180,
        marginBottom: 20,
        marginTop: 44
    },
    title: {
        fontSize: 20,
        fontFamily: FONT.OXYGEN_BOLD
    },
    inputsContainer: {
        width: '75%',
    },
    dateInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderBottomColor: colors.green[800],
        borderBottomWidth: 2,
        paddingHorizontal: 10,
        width: '100%',
        height: 48,
        marginTop: 20,
    },
    dateInput: {
        flex: 1,
        fontSize: 14,
        color: colors.black,
        width: '80%',
        alignItems: 'center',
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
