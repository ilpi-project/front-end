import Button from '@/app/components/Button';
import Input from '@/app/components/Input';
import colors from '@/app/config/colors';
import FONT from '@/app/config/fonts';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
// import { styles } from "./styles";

export default function MemberProfile() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.memberPicContainer}>
                    <Image style={styles.memberPic} source={require('@/app/assets/images/old-man.png')} />
                </View>
                <View style={styles.memberPersonalInfos}>
                    <Text style={styles.title}>Informações do(a) idoso(a)</Text>

                    <Input icon="person" value="José Augusto da Silva" editable={false} />
                    <Input icon="id-card" value="000.000.000-00" editable={false} />
                    <Input icon="call" value="(11) 9999-9999" editable={false} />
                    <Input icon="medkit" value="NotreDame Intermédica" editable={false} />
                </View>
                <Button text="Editar informações" variant="primary" style={{ width: '70%', alignSelf: 'center' }} />
                <View style={styles.infosContainer}>
                    <View style={[styles.medicalInfosContainer, { backgroundColor: colors.green[100] }]}>
                        <View style={styles.textContainer}>
                            <Text style={styles.subtitle}>Relatório médico</Text>
                            <Text style={styles.infoText}>
                                Anexe relatórios médicos, prescrições e outros arquivos essenciais para fácil acesso.
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.medicalInfosContainer, { backgroundColor: colors.green[800] }]}>
                        <View style={styles.textContainer}>
                            <Text style={[styles.subtitle, { color: colors.white }]}>Restrição alimentar</Text>
                            <Text style={[styles.infoText, { color: colors.white }]}>Intolerância à lactose</Text>
                            <Text style={[styles.infoText, { color: colors.white }]}>Diabetes</Text>
                            <Text style={[styles.infoText, { color: colors.white }]}>Alergia a frutos do mar</Text>
                        </View>
                        <Ionicons name="warning" color={colors.white} />
                    </View>
                    <View style={[styles.medicalInfosContainer, { backgroundColor: colors.green[100] }]}>
                        <View style={styles.textContainer}>
                            <Text style={styles.subtitle}>Contato emergencial</Text>
                            <Text style={styles.infoText}>Nome: Felipe da Silva</Text>
                            <Text style={styles.infoText}>Tel.: (11) 9999-9999</Text>
                        </View>
                        <Ionicons name="call" />
                    </View>
                </View>
                <View></View>
                <View></View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.beige,
        flex: 1,
        width: '100%',
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 80,
        paddingHorizontal: 28,
        paddingTop: 28,
        // alignItems: 'center',
    },
    memberPicContainer: {
        backgroundColor: colors.white,
        borderWidth: 3,
        borderColor: '#96AC76',
        borderRadius: '50%',
        width: 120,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 52,
        alignSelf: 'center',
    },
    memberPic: {
        height: 84,
        width: 84,
    },
    memberPersonalInfos: {
        marginVertical: 24,
    },
    title: {
        textAlign: 'center',
        fontFamily: FONT.OXYGEN_BOLD,
        fontSize: 20,
    },
    infosContainer: {
        gap: 16,
    },
    medicalInfosContainer: {
        borderRadius: 12,
        paddingVertical: 8,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center'
    },
    subtitle: {
        fontSize: 20,
        fontFamily: FONT.OXYGEN_BOLD,
    },
    infoText: {
        fontSize: 18,
        fontFamily: FONT.OXYGEN_REGULAR,
        flexShrink: 1 
        // width: '100%'
    },
    textContainer: {},
});
