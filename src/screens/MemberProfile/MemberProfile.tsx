import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import COLORS from '@/config/colors';
import FONTS from '@/config/fonts';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

export const MemberProfile = () => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.memberPicContainer}>
                    <Image style={styles.memberPic} source={require('@/assets/images/old-man.png')} />
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
                    <View style={[styles.medicalInfosContainer, { backgroundColor: COLORS.green[100] }]}>
                        <View>
                            <Text style={styles.subtitle}>Relatório médico</Text>
                            <Text style={styles.infoText}>
                                Anexe relatórios médicos, prescrições e outros arquivos essenciais para fácil acesso.
                            </Text>
                            <View>
                                <TouchableOpacity
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-end',
                                    }}>
                                    <Text
                                        style={{
                                            fontFamily: FONTS.OXYGEN_REGULAR,
                                            fontSize: 16,
                                            color: COLORS.green[800],
                                            textDecorationLine: 'underline',
                                        }}>
                                        <Ionicons name="download" size={18} color={COLORS.green[800]} />
                                        Baixar relatório
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.medicalInfosContainer, { backgroundColor: COLORS.green[800] }]}>
                        <View>
                            <Text style={[styles.subtitle, { color: COLORS.white }]}>Restrição alimentar</Text>
                            <Text style={[styles.infoText, { color: COLORS.white }]}>- Intolerância à lactose</Text>
                            <Text style={[styles.infoText, { color: COLORS.white }]}>- Diabetes</Text>
                            <Text style={[styles.infoText, { color: COLORS.white }]}>- Alergia a frutos do mar</Text>
                        </View>
                        <Ionicons name="warning" size={80} color={COLORS.white} />
                    </View>
                    <View style={[styles.medicalInfosContainer, { backgroundColor: COLORS.green[100] }]}>
                        <View>
                            <Text style={styles.subtitle}>Contato emergencial</Text>
                            <Text style={styles.infoText}>Nome: Felipe da Silva</Text>
                            <Text style={styles.infoText}>Tel.: (11) 9999-9999</Text>
                        </View>
                        <Ionicons name="call" size={56} color={COLORS.green[800]} />
                    </View>
                </View>
                <View></View>
                <View></View>
            </ScrollView>
        </View>
    );
};
