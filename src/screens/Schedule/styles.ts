import { StyleSheet } from 'react-native';
import FONTS from '@/config/fonts';
import COLORS from '@/config/colors';

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
    calendar: {
        backgroundColor: 'transparent',
        marginVertical: 24,
        width: '100%',
    },
    calendarHeader: {
        backgroundColor: COLORS.green[800],
        borderBottomWidth: 2,
        borderBottomColor: COLORS.green[100],
        borderRadius: 8,
        paddingBottom: 4,
        marginBottom: 4,
    },
    schedulesContainer: {
        width: '100%',
        gap: 16,
    },
    schedulesTitle: {
        fontSize: 20,
        fontFamily: FONTS.OXYGEN_BOLD,
        marginBottom: 8,
    },
    schedule: {
        backgroundColor: COLORS.green[100],
        borderRadius: 8,
    },
    scheduleTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    scheduleText: {
        fontSize: 18,
        fontFamily: FONTS.OXYGEN_REGULAR,
    },
    dayInputContainer: {
        position: 'absolute',
        bottom: 10,
        borderWidth: 2,
        borderColor: COLORS.green[800],
        width: '90%',
        backgroundColor: COLORS.beige,
        borderRadius: 12,
        height: 52,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    dayInput: {
        width: '85%',
        fontSize: 16,
        fontFamily: FONTS.OXYGEN_REGULAR,
    },
});
