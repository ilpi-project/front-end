import React from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import COLORS from '@/config/colors';
import { Member } from '@/interfaces';
import { formatPhone } from '@/utils/formatters';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import MemberContainer from '@/components/MemberContainer/MemberContainer';
import { router } from 'expo-router';
import { setMemberDetails } from '@/store/slices/memberSlice';

export const Profile = () => {
    const user = useSelector((state: RootState) => state.userDetails.details);
    const members = useSelector((state: RootState) => state.membersList.membersList);
    const dispatch = useDispatch();

    const handleGoToMemberProfile = (member: Member) => {
        dispatch(setMemberDetails(member));
        router.push('/MemberProfile');
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.profilePicContainer}>
                    <Image style={styles.profilePic} source={require('@/assets/images/man.png')} />
                </View>
                <View style={styles.profileInfosContainer}>
                    <Text style={styles.title}>Informações do Perfil</Text>
                    <Input icon="person" value={user.name} editable={false} />
                    <Input icon="mail" value={user.email} editable={false} />
                    <Input icon="call" value={formatPhone(user.phone)} editable={false} />
                </View>
                <Button text="Editar informações" variant="primary" style={{ width: '70%' }} />
                <View style={styles.membersContainer}>
                    <Text style={styles.subtitle}>Cadastros Ativos</Text>
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
            </View>
        </ScrollView>
    );
};
