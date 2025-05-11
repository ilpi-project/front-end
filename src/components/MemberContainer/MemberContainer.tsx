import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { Member } from '@/interfaces';
import { formatCPF } from '@/utils/formatters';
import COLORS from '@/config/colors';
import { API_BASE_URL } from '@/config/api';

interface MemberContainerProps {
    member: Member;
    handleGoToMemberProfile: (member: Member) => void;
}

export default function MemberContainer({ member, handleGoToMemberProfile }: MemberContainerProps) {
    const imageUrl = `${API_BASE_URL}/members/${member._id}/image`;

    return (
        <TouchableOpacity
            key={member._id}
            style={styles.memberContainer}
            onPress={() => handleGoToMemberProfile(member)}>
            <View style={styles.memberInfosContainer}>
                <Text style={styles.memberInfosText}>{member.name}</Text>
                <Text style={styles.memberInfosTextSecondary}>CPF: {formatCPF(member.cpf)}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                <View style={styles.memberPicContainer}>
                    <Image style={styles.memberPic} source={{ uri: imageUrl }} />
                </View>
                <Ionicons name="chevron-forward" color={COLORS.green[800]} size={18} />
            </View>
        </TouchableOpacity>
    );
}
