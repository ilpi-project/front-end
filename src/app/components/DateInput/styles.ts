import colors from '@/app/config/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
});

export default styles;
