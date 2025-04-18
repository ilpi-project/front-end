import colors from '@/app/config/colors';
import FONT from '@/app/config/fonts';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Home() {
    const router = useRouter();
    const handleGoToCalendar = () => {
        router.push('./Calendar');
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerTextSmall}>Que bom ter você de volta ao</Text>
                    <Text style={styles.headerTextLarge}>ILPI</Text>
                    <Text style={styles.headerTextSmall}>Instituto de Longa Permanência para Idosos</Text>
                </View>
                <Image source={require('@/app/assets/images/logo.png')} style={styles.icon} />
            </View>
            <View style={styles.membersListContainer}>
                <TouchableOpacity style={styles.memberContainer}>
                    <View style={styles.memberInfosContainer}>
                        <Text style={styles.memberInfosText}>José Augusto da Silva</Text>
                        <Text style={styles.memberInfosTextSecondary}>CPF/RG: 000.000.000-00</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                        <View style={styles.memberPicContainer}>
                            <Image style={styles.memberPic} source={require('@/app/assets/images/old-man.png')} />
                        </View>
                        <Ionicons name="chevron-forward" color={colors.green[800]} size={18} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.memberContainer}>
                    <View style={styles.memberInfosContainer}>
                        <Text style={styles.memberInfosText}>Maria Antônia de Jesus</Text>
                        <Text style={styles.memberInfosTextSecondary}>CPF/RG: 000.000.000-00</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                        <View style={styles.memberPicContainer}>
                            <Image style={styles.memberPic} source={require('@/app/assets/images/old-woman.png')} />
                        </View>
                        <Ionicons name="chevron-forward" color={colors.green[800]} size={18} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addMemberButton}>
                    <Text style={styles.addMemberButtonText}>Adicionar mais parentes</Text>
                    <Ionicons name="add" color={colors.white} size={20} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.beige,
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
        fontFamily: FONT.OXYGEN_REGULAR,
        fontSize: 18,
    },
    headerTextLarge: {
        fontFamily: FONT.OXYGEN_REGULAR,
        fontSize: 28,
    },
    icon: {
        width: 120,
        height: 120,
    },
    usernameContainer: {
        backgroundColor: '#2E5E3D',
        width: '100%',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginVertical: 32,
    },
    usernameText: {
        color: '#ffffff',
        fontFamily: FONT.OXYGEN_REGULAR,
        fontSize: 18,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttonsContainer: {
        width: '100%',
        gap: 28,
        marginTop: 20,
    },
    buttonContainer: {
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A9C087',
        borderRadius: '50%',
        width: 70,
        height: 70,
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 4,
    },
    membersListContainer: {
        width: '100%',
        marginTop: 40,
        gap: 16,
    },
    memberContainer: {
        backgroundColor: '#a9c087',
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
        color: colors.green[800],
        fontSize: 16,
        fontFamily: FONT.OXYGEN_BOLD,
    },
    memberInfosTextSecondary: {
        color: colors.white,
        fontSize: 16,
        fontFamily: FONT.OXYGEN_REGULAR,
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
        backgroundColor: colors.green[800],
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 36,
        paddingVertical: 4,
        paddingHorizontal: 16,
    },
    addMemberButtonText: {
        color: colors.white,
        fontSize: 18,
        fontFamily: FONT.OXYGEN_BOLD,
    },
});
