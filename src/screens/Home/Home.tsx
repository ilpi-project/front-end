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
import { useDispatch } from 'react-redux';
import { setMemberDetails } from '@/store/slices/memberSlice';
import MemberContainer from '@/components/MemberContainer/MemberContainer';

export const Home = () => {
    const [members, setMembers] = useState<Member[]>([]);
    const dispatch = useDispatch();

    const getApi = async () => {
        try {
            const token = await AsyncStorage.getItem('userToken');
            const response = await axios.get(`${API_BASE_URL}/members`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setMembers(response.data);
        } catch (e) {
            console.log('Erro ao buscar membros:', e);
        }
    };

    useEffect(() => {
        getApi();
    }, []);

    const router = useRouter();

    const handleGoToMemberProfile = (member: Member) => {
        dispatch(setMemberDetails(member));
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
                    <MemberContainer member={member} handleGoToMemberProfile={handleGoToMemberProfile} />
                ))}
                <TouchableOpacity style={styles.addMemberButton}>
                    <Text style={styles.addMemberButtonText}>Adicionar mais parentes</Text>
                    <Ionicons name="person-add" color={COLORS.white} size={20} />
                </TouchableOpacity>
            </View>
        </View>
    );
};
