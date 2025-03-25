import React, { useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Swiper from 'react-native-swiper';
import { useRouter } from 'expo-router';

import styles from './styles';

export default function Onboarding() {
    const router = useRouter();
    const handleSkip = () => {
        router.push('/Login'); // router.replace('Login');
    };

    const swiperRef = useRef<Swiper | null>(null);

    const goToPrevious = () => {
        swiperRef.current?.scrollBy(-1, true);
    };

    const goToNext = () => {
        swiperRef.current?.scrollBy(1, true);
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <SafeAreaView style={styles.container}>
            <Swiper
                ref={swiperRef}
                loop={false}
                showsPagination={true}
                dotColor="#A9C087"
                activeDotColor="#6B9829"
                activeDotStyle={{ width: 20 }}
                paginationStyle={{ bottom: 30 }}
                onIndexChanged={(index) => setCurrentIndex(index)}>
                <View style={styles.slideContainer}>
                    <View style={styles.slideHeader}>
                        <TouchableOpacity style={styles.skipButton}>
                            <Text style={styles.skipButtonText}>Pular</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infosContainer}>
                        <Image source={require('../assets/images/onboarding-img-1.png')} style={styles.image1} />
                        <Text style={styles.title}>Bem-vindo ao ILPI App</Text>
                        <Text style={styles.text}>
                            O ILPI App é uma plataforma digital desenvolvida para facilitar a gestão e o acompanhamento
                            de idosos em instituições de longa permanência.
                        </Text>
                    </View>
                </View>
                <View style={styles.slideContainer}>
                    <View style={styles.slideHeader}>
                        <TouchableOpacity style={styles.skipButton}>
                            <Text style={styles.skipButtonText}>Pular</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infosContainer}>
                        <Image source={require('../assets/images/onboarding-img-2.png')} style={styles.image2} />
                        <Text style={styles.title}>Apoio e bem-estar</Text>
                        <Text style={styles.text}>
                            O aplicativo oferece recursos para familiares, cuidadores e administradores, garantindo um
                            cuidado mais humanizado e eficiente.
                        </Text>
                    </View>
                </View>
                <View style={styles.slideContainer}>
                    <View style={styles.infosContainer}>
                        <View style={styles.slideHeader}></View>
                        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
                        <Text style={styles.title}>Junte-se a nós</Text>
                        <Text style={styles.text}>
                            Crie sua conta e tenha acesso a todas as informações sobre nosso instituto!{' '}
                        </Text>
                        <Text style={styles.text}>
                            Conheça nossa história, nossos valores e os serviços que oferecemos.
                        </Text>
                        <Text style={styles.text}>
                            Cadastre-se agora e descubra como podemos fazer a diferença para você e sua família!
                        </Text>
                    </View>
                </View>
            </Swiper>
            {currentIndex < 2 && (
                <View style={styles.navButtonsContainer}>
                    {currentIndex === 1 && (
                        <TouchableOpacity onPress={goToPrevious} style={styles.backButton}>
                            <Text style={styles.backButtonText}>Anterior</Text>
                        </TouchableOpacity>
                    )}

                    {currentIndex < 2 && (
                        <TouchableOpacity onPress={goToNext} style={styles.nextButton}>
                            <Text style={styles.nextButtonText}>Próximo</Text>
                        </TouchableOpacity>
                    )}
                </View>
            )}
            {currentIndex === 2 && (
                <View style={styles.startButtonContainer}>
                    <TouchableOpacity onPress={handleSkip} style={styles.startButton}>
                        <Text style={styles.startButtonText}>Vamos lá!</Text>
                    </TouchableOpacity>
                </View>
            )}
        </SafeAreaView>
    );
}
