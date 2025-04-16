import { ScrollView, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import colors from '@/app/config/colors';
import Header from '@/app/components/Header';
import { Ionicons } from '@expo/vector-icons';
import FONT from '@/app/config/fonts';

export default function Contact() {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Header text="Contato" />
                <View style={styles.contactsContainer}>
                    <View style={styles.contact}>
                        <View style={styles.contactTitleContainer}>
                            <Ionicons name="call" color={colors.green[800]} size={20} />
                            <Text style={styles.contactTitleText}>Contatos importantes</Text>
                        </View>
                        <Text style={styles.contactText}>
                            <Ionicons name="checkmark" color={colors.green[800]} size={20} />
                            Telefone fixo – Para atendimento geral.
                        </Text>
                        <Text style={styles.contactText}>
                            <Ionicons name="checkmark" color={colors.green[800]} size={20} />
                            WhatsApp – Para comunicação rápida e prática.
                        </Text>
                        <Text style={styles.contactText}>
                            <Ionicons name="checkmark" color={colors.green[800]} size={20} />
                            E-mail – Para dúvidas, documentos e solicitações.
                        </Text>
                        <Text style={styles.contactText}>
                            <Ionicons name="checkmark" color={colors.green[800]} size={20} />
                            Endereço do ILPI – Com integração ao Google Maps para facilitar a localização.
                        </Text>
                    </View>

                    <View style={styles.contact}>
                        <View style={styles.contactTitleContainer}>
                            <Ionicons name="clipboard" color={colors.green[800]} size={20} />
                            <Text style={styles.contactTitleText}>Setores e Reponsáveis</Text>
                        </View>
                        <Text style={styles.contactText}>
                            <Ionicons name="checkmark" color={colors.green[800]} size={20} />
                            Atendimento Geral – Para informações e agendamentos.
                        </Text>
                        <Text style={styles.contactText}>
                            <Ionicons name="checkmark" color={colors.green[800]} size={20} />
                            Enfermagem – Para falar sobre a saúde do residente.
                        </Text>
                        <Text style={styles.contactText}>
                            <Ionicons name="checkmark" color={colors.green[800]} size={20} />
                            Coordenação – Para assuntos administrativos e dúvidas sobre o ILPI.
                        </Text>
                        <Text style={styles.contactText}>
                            <Ionicons name="checkmark" color={colors.green[800]} size={20} />
                            Assistência Social – Para suporte a famílias e novas admissões.
                        </Text>
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
    contactsContainer: {},
    contact: {},
    contactTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    contactTitleText: {
        fontSize: 20,
        fontFamily: FONT.OXYGEN_BOLD,
        marginVertical: 16,
        marginLeft: 8,
    },
    contactText: {
        fontSize: 18,
        marginVertical: 8,
        gap: 8,
    },
});
