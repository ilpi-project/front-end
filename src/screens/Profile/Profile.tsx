import React from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import COLORS from '@/config/colors';

export const Profile = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.profilePicContainer}>
                    <Image style={styles.profilePic} source={require('@/assets/images/man.png')} />
                </View>
                <View style={styles.profileInfosContainer}>
                    <Text style={styles.title}>Informações do Perfil</Text>
                    <Input icon="person" value="Felipe da Silva" editable={false} />
                    <Input icon="mail" value="fsilva@gmail.com" editable={false} />
                    <Input icon="call" value="(11) 9999-9999" editable={false} />
                </View>
                <Button text="Editar informações" variant="primary" style={{ width: '70%' }} />
                <View style={styles.membersContainer}>
                    <Text style={styles.subtitle}>Cadastros Ativos</Text>
                    <View style={styles.membersListContainer}>
                        <TouchableOpacity style={styles.memberContainer}>
                            <View style={styles.memberInfosContainer}>
                                <Text style={styles.memberInfosText}>José Augusto da Silva</Text>
                                <Text style={styles.memberInfosTextSecondary}>CPF/RG: 000.000.000-00</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                                <View style={styles.memberPicContainer}>
                                    <Image style={styles.memberPic} source={require('@/assets/images/old-man.png')} />
                                </View>
                                <Ionicons name="chevron-forward" color={COLORS.green[800]} size={18} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.memberContainer}>
                            <View style={styles.memberInfosContainer}>
                                <Text style={styles.memberInfosText}>Maria Antônia de Jesus</Text>
                                <Text style={styles.memberInfosTextSecondary}>CPF/RG: 000.000.000-00</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                                <View style={styles.memberPicContainer}>
                                    <Image style={styles.memberPic} source={require('@/assets/images/old-woman.png')} />
                                </View>
                                <Ionicons name="chevron-forward" color={COLORS.green[800]} size={18} />
                            </View>
                        </TouchableOpacity>
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
