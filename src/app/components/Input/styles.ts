import { StyleSheet } from 'react-native';
import colors from '@/app/config/colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderBottomColor: colors.green[800],
        borderBottomWidth: 2,
        paddingHorizontal: 10,
        width: '100%',
        height: 48,
        marginTop: 20
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: colors.black,
        width: '80%',
        alignItems: 'center'
    },
    icon: {
        marginRight: 8
    },
});

export default styles;
