import { StyleSheet } from "react-native";
import COLORS from "@/config/colors";
import FONTS from "@/config/fonts";

export const styles = StyleSheet.create({
        memberContainer: {
        backgroundColor: COLORS.green[100],
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        width: '100%',
        justifyContent: 'space-between',
        borderColor: COLORS.green[200],
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
        backgroundColor: COLORS.green[200],
        borderRadius: '50%',
        width: 72,
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
    },
    memberPic: {
        width: 64,
        height: 64,
        borderRadius: 100
    },
})