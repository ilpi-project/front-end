import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { useRouter } from 'expo-router';

import { styles } from './styles';

export default function Onboarding() {
    const router = useRouter();
    const handleSkip = () => {
        router.push('/Login');
    };
    return (
        <Swiper
            loop={false}
            showsPagination={true}
            dotColor="#A9C087"
            activeDotColor="#6B9829"
            paginationStyle={{ bottom: 50 }}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
                    <Text style={styles.skipButtonText}>Pular</Text>
                </TouchableOpacity>
                <View style={styles.infosContainer}>
                    <Image source={require('../assets/images/onboarding-img-1.png')} style={styles.image} />
                    <Text style={styles.text}>
                        O ILPI App é uma plataforma digital desenvolvida para facilitar a gestão e o acompanhamento de
                        idosos em instituições de longa permanência.
                    </Text>
                </View>
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
                    <Text style={styles.skipButtonText}>Pular</Text>
                </TouchableOpacity>
                <View style={styles.infosContainer}>
                    <Image source={require('../assets/images/onboarding-img-2.png')} style={styles.image} />
                    <Text style={styles.text}>
                        O aplicativo oferece recursos para familiares, cuidadores e administradores, garantindo um
                        cuidado mais humanizado e eficiente.
                    </Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.infosContainer}>
                    <Image source={require('../assets/images/onboarding-img-3.png')} style={styles.smallImage} />
                    <Text style={styles.text}>
                        Crie sua conta e tenha acesso a todas as informações sobre nosso instituto!
                    </Text>
                    <Text style={styles.text}>
                        Conheça nossa história, nossos valores e os serviços que oferecemos.
                    </Text>
                    <Text style={styles.text}>
                        Cadastre-se agora e descubra como podemos fazer a diferença para você e sua família!
                    </Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSkip}>
                  <Text style={styles.buttonText}>Vamos lá!</Text>
                </TouchableOpacity>
            </View>
        </Swiper>
    );
}
