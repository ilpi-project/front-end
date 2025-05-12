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
        borderColor: COLORS.green[200],
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
