import { StyleSheet } from 'react-native';
import COLORS from '@/config/colors';
import FONTS from '@/config/fonts';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.beige,
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
        backgroundColor: COLORS.white,
        borderWidth: 3,
        borderColor: COLORS.green[200],
        borderRadius: '50%',
        width: 120,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 52,
        alignSelf: 'center',
    },
    memberPic: {
        height: '100%',
        width: '100%',
        borderRadius: 100,
    },
    memberPersonalInfos: {
        marginVertical: 24,
    },
    title: {
        textAlign: 'center',
        fontFamily: FONTS.OXYGEN_BOLD,
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
        fontFamily: FONTS.OXYGEN_BOLD,
        marginBottom: 4,
    },
    infoText: {
        fontSize: 18,
        fontFamily: FONTS.OXYGEN_REGULAR,
        flexShrink: 1,
    },
});
