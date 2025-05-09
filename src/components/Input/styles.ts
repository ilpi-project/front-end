import { StyleSheet } from 'react-native';
import COLORS from '@/config/colors';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderBottomColor: COLORS.green[800],
        borderBottomWidth: 2,
        paddingHorizontal: 10,
        width: '100%',
        height: 48,
        marginTop: 20,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: COLORS.black,
        width: '80%',
        alignItems: 'center',
    },
    icon: {
        marginRight: 8,
    },
});
