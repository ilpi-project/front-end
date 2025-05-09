import { StyleSheet } from 'react-native';
import COLORS from '@/config/colors';
import FONTS from '@/config/fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.beige,
        padding: 28,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 52,
        width: '100%',
    },
    headerTextContainer: {
        width: '57%',
    },
    headerTextSmall: {
        fontFamily: FONTS.OXYGEN_REGULAR,
        fontSize: 18,
    },
    headerTextLarge: {
        fontFamily: FONTS.OXYGEN_REGULAR,
        fontSize: 28,
    },
    icon: {
        width: 120,
        height: 120,
    },
    usernameContainer: {
        backgroundColor: COLORS.green[800],
        width: '100%',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginVertical: 32,
    },
    usernameText: {
        color: COLORS.white,
        fontFamily: FONTS.OXYGEN_REGULAR,
        fontSize: 18,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    membersListContainer: {
        width: '100%',
        marginTop: 40,
        gap: 16,
    },
    addMemberButton: {
        backgroundColor: COLORS.green[800],
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 36,
        paddingVertical: 4,
        paddingHorizontal: 16,
    },
    addMemberButtonText: {
        color: COLORS.white,
        fontSize: 18,
        fontFamily: FONTS.OXYGEN_BOLD,
    },
});
