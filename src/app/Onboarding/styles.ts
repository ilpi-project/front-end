import { StyleSheet } from 'react-native';
import FONT from '@/app/config/fonts';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5E6CC',
    },
    slideContainer: {
        flex: 1,
        alignItems: 'center',
    },
    slideHeader: {
        width: '100%',
        height: 120,
        alignItems: 'flex-end',
        padding: 40,
        boxSizing: 'border-box',
        justifyContent: 'center',
    },
    skipButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24,
        backgroundColor: 'transparent',
    },
    skipButtonText: {
        fontFamily: FONT.OXYGEN_BOLD,
        color: '#333734',
        letterSpacing: 1,
        fontSize: 18,
    },
    infosContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
    },
    image1: {
        height: 310,
        width: 290,
        marginBottom: 20,
        marginTop: 15,
    },
    image2: {
        height: 300,
        width: 290,
        marginBottom: 20,
        marginTop: 15,
    },
    logo: {
        height: 230,
        width: 230,
        marginBottom: 30,
    },
    title: {
        fontFamily: FONT.OXYGEN_BOLD,
        fontSize: 24,
        marginBottom: 12,
    },
    text: {
        fontFamily: FONT.OXYGEN_REGULAR,
        fontSize: 16,
        width: '100%',
        color: '#333',
        marginBottom: 5,
        letterSpacing: 0.65,
        textAlign: 'center',
        lineHeight: 25,
    },
    navButtonsContainer: {
        width: '100%',
        position: 'relative',
        flexDirection: 'row',
        bottom: 0,
        paddingHorizontal: 36,
        paddingVertical: 40,
        justifyContent: 'space-between',
    },
    nextButton: {
        backgroundColor: '#2E5E3D',
        width: '35%',
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
    },
    nextButtonText: {
        fontSize: 20,
        fontFamily: FONT.OXYGEN_BOLD,
        color: '#fff',
    },
    backButton: {
        width: '35%',
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24,
        backgroundColor: 'transparent',
    },
    backButtonText: {
        fontSize: 18,
        fontFamily: FONT.OXYGEN_BOLD,
        color: '#333734',
    },
    startButtonContainer: {
        width: '100%',
        position: 'relative',
        bottom: 0,
        padding: 36,
        alignItems: 'center',
    },
    startButton: {
        backgroundColor: '#2E5E3D',
        width: '45%',
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
    },
    startButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
});

export default styles;
