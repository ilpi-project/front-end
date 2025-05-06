import colors from "@/app/config/colors";
import FONT from "@/app/config/fonts";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.beige,
        flex: 1,
        width: '100%',
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 80,
        paddingHorizontal: 28,
        paddingTop: 28,
    },
    memberPicContainer: {
        backgroundColor: colors.white,
        borderWidth: 3,
        borderColor: '#96AC76',
        borderRadius: '50%',
        width: 120,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 52,
        alignSelf: 'center',
    },
    memberPic: {
        height: 84,
        width: 84,
    },
    memberPersonalInfos: {
        marginVertical: 24,
    },
    title: {
        textAlign: 'center',
        fontFamily: FONT.OXYGEN_BOLD,
        fontSize: 20,
    },
    infosContainer: {
        gap: 16,
        marginTop: 24,
    },
    medicalInfosContainer: {
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    subtitle: {
        fontSize: 20,
        fontFamily: FONT.OXYGEN_BOLD,
        marginBottom: 4,
    },
    infoText: {
        fontSize: 18,
        fontFamily: FONT.OXYGEN_REGULAR,
        flexShrink: 1,
    },
});

export default styles;