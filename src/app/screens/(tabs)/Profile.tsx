import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '@/app/config/colors';
import Button from '@/app/components/Button';
import Input from '@/app/components/Input';
import FONT from '@/app/config/fonts';
import { Ionicons } from '@expo/vector-icons';

export default function Profile() {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.profilePicContainer}>
                    <Image style={styles.profilePic} source={require('@/app/assets/images/man.png')} />
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
                    <Ionicons name="person-add" color={colors.white} size={20} />
                </TouchableOpacity>
            </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.beige,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 28,
        width: '100%',
    },
    title: {
      textAlign: 'center',
      fontFamily: FONT.OXYGEN_BOLD,
      fontSize: 20,
    },
    subtitle: {
      fontFamily: FONT.OXYGEN_BOLD,
      fontSize: 20,
      color: colors.green[800],
    },
    profilePicContainer: {
        backgroundColor: colors.white,
        borderWidth: 3,
        borderColor: '#96AC76',
        borderRadius: '50%',
        width: 120,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 52
    },
    profilePic: {
        height: 84,
        width: 84,
    },
    profileInfosContainer: {
      marginVertical: 24,
      width: '100%'
    },
    membersContainer: {
      marginVertical: 40,
      width: '100%'
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-around',
  },
  membersListContainer: {
      width: '100%',
      marginTop: 20,
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
