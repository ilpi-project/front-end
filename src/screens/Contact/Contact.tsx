import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Header from '@/components/Header/Header';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '@/config/colors';

export const Contact = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Header text="Contato" />
                <View style={styles.contactsContainer}>
                    <View style={styles.contact}>
                        <View style={styles.contactTitleContainer}>
                            <Ionicons name="call" color={COLORS.green[800]} size={20} />
                            <Text style={styles.contactTitleText}>Contatos importantes</Text>
                        </View>
                        <Text style={styles.contactText}>
                            <Ionicons name="checkmark" color={COLORS.green[800]} size={20} />
                            Telefone fixo – Para atendimento geral.
                        </Text>
                        <Text style={styles.contactText}>
                            <Ionicons name="checkmark" color={COLORS.green[800]} size={20} />
                            WhatsApp – Para comunicação rápida e prática.
                        </Text>
                        <Text style={styles.contactText}>
                            <Ionicons name="checkmark" color={COLORS.green[800]} size={20} />
                            E-mail – Para dúvidas, documentos e solicitações.
                        </Text>
                        <Text style={styles.contactText}>
                            <Ionicons name="checkmark" color={COLORS.green[800]} size={20} />
                            Endereço do ILPI – Com integração ao Google Maps para facilitar a localização.
                        </Text>
                    </View>

                    <View style={styles.contact}>
                        <View style={styles.contactTitleContainer}>
                            <Ionicons name="clipboard" color={COLORS.green[800]} size={20} />
                            <Text style={styles.contactTitleText}>Setores e Reponsáveis</Text>
                        </View>
                        <Text style={styles.contactText}>
                            <Ionicons name="checkmark" color={COLORS.green[800]} size={20} />
                            Atendimento Geral – Para informações e agendamentos.
                        </Text>
                        <Text style={styles.contactText}>
                            <Ionicons name="checkmark" color={COLORS.green[800]} size={20} />
                            Enfermagem – Para falar sobre a saúde do residente.
                        </Text>
                        <Text style={styles.contactText}>
                            <Ionicons name="checkmark" color={COLORS.green[800]} size={20} />
                            Coordenação – Para assuntos administrativos e dúvidas sobre o ILPI.
                        </Text>
                        <Text style={styles.contactText}>
                            <Ionicons name="checkmark" color={COLORS.green[800]} size={20} />
                            Assistência Social – Para suporte a famílias e novas admissões.
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};
