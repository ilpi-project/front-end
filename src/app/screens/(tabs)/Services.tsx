import { ScrollView, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import colors from '@/app/config/colors';
import Header from '@/app/components/Header';
import FONT from '@/app/config/fonts';
import { Ionicons } from '@expo/vector-icons';

export default function Services() {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Header text="Nossos Serviços" />
                <View style={styles.servicesContainer}>
                    <View style={styles.service}>
                        <View style={styles.serviceTitleContainer}>
                            <Ionicons name="medkit" color={colors.green[800]} size={20} />
                            <Text style={styles.serviceTitleText}>Cuidados Médicos e Saúde</Text>
                        </View>
                        <Text style={styles.serviceText}>
                            <Ionicons name="checkmark" color={colors.green[800]} size={20} />
                            Atendimento Médico – Consultas regulares com clínico geral e especialistas.
                        </Text>
                        <Text style={styles.serviceText}>
                            <Ionicons name="checkmark" color={colors.green[800]} size={20} />
                            Enfermagem 24h – Monitoramento constante da saúde dos residentes.
                        </Text>
                        <Text style={styles.serviceText}>
                            <Ionicons name="checkmark" color={colors.green[800]} size={20} />
                            Fisioterapia – Sessões para melhorar mobilidade e qualidade de vida.
                        </Text>
                        <Text style={styles.serviceText}>
                            <Ionicons name="checkmark" color={colors.green[800]} size={20} />
                            Psicologia e Terapia Ocupacional – Apoio emocional e atividades para manter a saúde mental.
                        </Text>
                        <Text style={styles.serviceText}>
                            <Ionicons name="checkmark" color={colors.green[800]} size={20} />
                            Administração de Medicamentos – Controle e fornecimento de remédios prescritos.
                        </Text>
                    </View>

                    <View style={styles.service}>
                        <View style={styles.serviceTitleContainer}>
                            <Ionicons name="restaurant" color={colors.green[800]} size={20} />
                            <Text style={styles.serviceTitleText}>Alimentação e Nutrição</Text>
                        </View>
                        <Text style={styles.serviceText}>
                            <Ionicons name="checkmark" color={colors.green[800]} size={20} />
                            Refeições Balanceadas – Cardápio preparado por nutricionistas.
                        </Text>
                        <Text style={styles.serviceText}>
                            <Ionicons name="checkmark" color={colors.green[800]} size={20} />
                            Dietas Especiais – Alimentação adaptada para necessidades médicas.
                        </Text>
                        <Text style={styles.serviceText}>
                            <Ionicons name="checkmark" color={colors.green[800]} size={20} />
                            Hidratação Assistida – Acompanhamento da ingestão de líquidos.
                        </Text>
                    </View>

                    <View style={styles.service}>
                        <View style={styles.serviceTitleContainer}>
                            <Ionicons name="home" color={colors.green[800]} size={20} />
                            <Text style={styles.serviceTitleText}>Bem-Estar e Conforto</Text>
                        </View>
                        <Text style={styles.serviceText}>
                            <Ionicons name="checkmark" color={colors.green[800]} size={20} />
                            Cuidados Pessoais – Higiene, banho e troca de roupas.
                        </Text>
                        <Text style={styles.serviceText}>
                            <Ionicons name="checkmark" color={colors.green[800]} size={20} />
                            Lavanderia e Limpeza – Manutenção de roupas e ambiente sempre higienizados.
                        </Text>
                        <Text style={styles.serviceText}>
                            <Ionicons name="checkmark" color={colors.green[800]} size={20} />
                            Acompanhamento Individualizado – Monitoramento de necessidades específicas.
                        </Text>
                    </View>

                    <View style={styles.service}>
                        <View style={styles.serviceTitleContainer}>
                            <Ionicons name="color-palette" color={colors.green[800]} size={20} />
                            <Text style={styles.serviceTitleText}>Lazer e Socialização</Text>
                        </View>
                        <Text style={styles.serviceText}>
                            <Ionicons name="checkmark" color={colors.green[800]} size={20} />
                            Atividades Recreativas – Jogos, música, artesanato e passeios.
                        </Text>
                        <Text style={styles.serviceText}>
                            <Ionicons name="checkmark" color={colors.green[800]} size={20} />
                            Eventos e Celebrações – Festas de aniversário, datas comemorativas e encontros familiares.
                        </Text>
                        <Text style={styles.serviceText}>
                            <Ionicons name="checkmark" color={colors.green[800]} size={20} />
                            Aulas e Terapias – Yoga, dança, pintura e outras atividades.
                        </Text>
                    </View>

                    <View style={styles.service}>
                        <View style={styles.serviceTitleContainer}>
                            <Ionicons name="heart" color={colors.green[800]} size={20} />
                            <Text style={styles.serviceTitleText}>Apoio à Família</Text>
                        </View>
                        <Text style={styles.serviceText}>
                            <Ionicons name="checkmark" color={colors.green[800]} size={20} />
                            Relatórios e Atualizações – Informações sobre o bem-estar do residente.
                        </Text>
                        <Text style={styles.serviceText}>
                            <Ionicons name="checkmark" color={colors.green[800]} size={20} />
                            Visitas Programadas – Agendamento de encontros com familiares.
                        </Text>
                        <Text style={styles.serviceText}>
                            <Ionicons name="checkmark" color={colors.green[800]} size={20} />
                            Suporte para Dúvidas – Canal de comunicação direto com a equipe.
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
    servicesContainer: {},
    service: {},
    serviceTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    serviceTitleText: {
        fontSize: 20,
        fontFamily: FONT.OXYGEN_BOLD,
        marginVertical: 16,
        marginLeft: 8,
    },
    serviceText: {
        fontFamily: FONT.OXYGEN_REGULAR,
        fontSize: 18,
        marginVertical: 8,
    },
});
