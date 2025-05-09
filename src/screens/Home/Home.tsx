import { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { Member } from '@/interfaces';
import axios from 'axios';
import { API_BASE_URL } from '@/config/api';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '@/config/colors';

export const Home = () => {
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
        } catch (e) {
            console.log('Erro ao buscar membros:', e);
        }
    };

    useEffect(() => {
        getApi();
    }, []);

    const router = useRouter();
    const handleGoToMemberProfile = () => {
        router.push('/MemberProfile');
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerTextSmall}>Que bom ter você de volta ao</Text>
                    <Text style={styles.headerTextLarge}>ILPI</Text>
                    <Text style={styles.headerTextSmall}>Instituto de Longa Permanência para Idosos</Text>
                </View>
                <Image source={require('@/assets/images/logo.png')} style={styles.icon} />
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
                                <Image style={styles.memberPic} source={require('@/assets/images/old-man.png')} />
                            </View>
                            <Ionicons name="chevron-forward" color={COLORS.green[800]} size={18} />
                        </View>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity style={styles.addMemberButton}>
                    <Text style={styles.addMemberButtonText}>Adicionar mais parentes</Text>
                    <Ionicons name="person-add" color={COLORS.white} size={20} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

