import { Text, View } from 'react-native';
import { styles } from './styles';

type HeaderProps = {
    text: string;
};

export default function Header({ text }: HeaderProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{text}</Text>
            <View style={styles.line} />
        </View>
    );
}
