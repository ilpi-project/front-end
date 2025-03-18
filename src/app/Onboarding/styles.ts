import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5E6CC',
    },
    infosContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
    },
    image: {
        height: 350,
        width: 320,
        marginBottom: 20,
    },
    smallImage: {
        height: 200,
        width: 205,
        marginBottom: 30,
    },
    text: {
        fontSize: 18,
        width: '100%',
        color: '#333',
        marginBottom: 5,
        letterSpacing: 0.65,
        textAlign: 'left',
        lineHeight: 25,
    },
    skipButton: {
        position: 'absolute',
        top: 50,
        right: 50,
    },
    skipButtonText: {
        fontSize: 20,
    },
    button: {
        backgroundColor: '#2E5E3D',
        height: 52,
        width: '45%',
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
});
