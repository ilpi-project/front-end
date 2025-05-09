import { StyleSheet } from "react-native";
import COLORS from "@/config/colors";
import FONTS from "@/config/fonts";

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
