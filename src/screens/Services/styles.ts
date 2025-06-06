import { StyleSheet } from 'react-native';
import COLORS from '@/config/colors';
import FONTS from '@/config/fonts';

export const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.beige,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 28,
        width: '100%',
    },
    servicesContainer: {},
    service: {},
    serviceTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    serviceTitleText: {
        fontSize: 20,
        fontFamily: FONTS.OXYGEN_BOLD,
        marginVertical: 16,
        marginLeft: 8,
    },
    serviceText: {
        fontFamily: FONTS.OXYGEN_REGULAR,
        fontSize: 18,
        marginVertical: 8,
    },
});
