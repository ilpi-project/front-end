import { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { Member } from '@/interfaces';
import axios from 'axios';
import { API_BASE_URL } from '@/config/api';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '@/config/colors';
import { useDispatch, useSelector } from 'react-redux';
import { setMemberDetails } from '@/store/slices/memberSlice';
import MemberContainer from '@/components/MemberContainer/MemberContainer';
import { setUserDetails } from '@/store/slices/userSlice';
import { setMembersList } from '@/store/slices/membersListSlice';
import { RootState } from '@/store';
import { setEventsList } from '@/store/slices/eventListSlice';
import { useAuth } from '@/hooks/useAuth';

export const Home = () => {
    const members = useSelector((state: RootState) => state.membersList.membersList);
    const dispatch = useDispatch();
    useAuth();

    useEffect(() => {
        const getUser = async () => {
            try {
                const userId = await AsyncStorage.getItem('userId');
                if (userId) {
                    const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
                    dispatch(setUserDetails(response.data));
                }
            } catch (e) {
                console.log('Erro ao buscar usuário: ', e);
            }
        };
        const getMembers = async () => {
            try {
                const token = await AsyncStorage.getItem('userToken');
                const response = await axios.get(`${API_BASE_URL}/members`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                dispatch(setMembersList(response.data));
            } catch (e) {
                console.log('Erro ao buscar membros: ', e);
            }
        };

        const getEvents = async () => {
            try {
                const token = await AsyncStorage.getItem('userToken');
                const response = await axios.get(`${API_BASE_URL}/events`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                dispatch(setEventsList(response.data));
            } catch (e) {
                console.log('Erro ao buscar eventos: ', e);
            }
        };

        getUser();
        getMembers();
        getEvents();
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
                    <MemberContainer
                        key={member._id}
                        member={member}
                        handleGoToMemberProfile={handleGoToMemberProfile}
                    />
                ))}
                <TouchableOpacity style={styles.addMemberButton}>
                    <Text style={styles.addMemberButtonText}>Adicionar mais parentes</Text>
                    <Ionicons name="person-add" color={COLORS.white} size={20} />
                </TouchableOpacity>
            </View>
        </View>
    );
};
