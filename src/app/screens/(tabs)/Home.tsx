import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import axios from 'axios';
import colors from '@/app/config/colors';
import FONT from '@/app/config/fonts';
import { Ionicons } from '@expo/vector-icons';
import { API_BASE_URL } from '@/app/config/api/config.local';
import { Member } from '@/app/interfaces';

export default function Home() {
    const [members, setMembers] = useState<Member[]>([]);

    const getApi = async () => {
        try {
            const token = await AsyncStorage.getItem('userToken');
            const response = await axios.get(`${API_BASE_URL}/members`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setMembers(response.data)
            console.log(response.data);
        } catch (e) {
            console.log('Erro ao buscar membros:', e);
        }
    };

    useEffect(() => {
        getApi();
    }, []);

    const router = useRouter();
    const handleGoToMemberProfile = () => {
        router.push('/screens/MemberProfile');
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
                {members.map((member) => (
                    <TouchableOpacity key={member._id} style={styles.memberContainer} onPress={handleGoToMemberProfile}>
                        <View style={styles.memberInfosContainer}>
                            <Text style={styles.memberInfosText}>{member.name}</Text>
                            <Text style={styles.memberInfosTextSecondary}>CPF: {member.cpf}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                            <View style={styles.memberPicContainer}>
                                <Image style={styles.memberPic} source={require('@/app/assets/images/old-man.png')} />
                            </View>
                            <Ionicons name="chevron-forward" color={colors.green[800]} size={18} />
                        </View>
                    </TouchableOpacity>
                ))}
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
        backgroundColor: colors.green[800],
        width: '100%',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginVertical: 32,
    },
    usernameText: {
        color: colors.white,
        fontFamily: FONT.OXYGEN_REGULAR,
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
        backgroundColor: colors.green[100],
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
