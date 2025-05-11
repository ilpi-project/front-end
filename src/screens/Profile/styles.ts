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
    title: {
        textAlign: 'center',
        fontFamily: FONTS.OXYGEN_BOLD,
        fontSize: 20,
    },
    subtitle: {
        fontFamily: FONTS.OXYGEN_BOLD,
        fontSize: 20,
        color: COLORS.green[800],
    },
    profilePicContainer: {
        backgroundColor: COLORS.white,
        borderWidth: 3,
        borderColor: '#96AC76',
        borderRadius: '50%',
        width: 120,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 52,
    },
    profilePic: {
        height: '100%',
        width: '100%',
        borderRadius: 100,
    },
    profileInfosContainer: {
        marginVertical: 24,
        width: '100%',
    },
    membersContainer: {
        marginVertical: 40,
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    membersListContainer: {
        width: '100%',
        marginTop: 20,
        gap: 16,
    },
    memberContainer: {
        backgroundColor: COLORS.green[100],
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        width: '100%',
        justifyContent: 'space-between',
        borderColor: '#96AC76',
        borderWidth: 3,
    },
    memberInfosContainer: {
        gap: 4,
    },
    memberInfosText: {
        color: COLORS.green[800],
        fontSize: 16,
        fontFamily: FONTS.OXYGEN_BOLD,
    },
    memberInfosTextSecondary: {
        color: COLORS.white,
        fontSize: 16,
        fontFamily: FONTS.OXYGEN_REGULAR,
    },
    memberPicContainer: {
        backgroundColor: '#96AC76',
        borderRadius: '50%',
        width: 72,
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
    },
    memberPic: {
        width: 64,
        height: 64,
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
