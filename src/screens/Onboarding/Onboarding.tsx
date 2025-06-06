import React, { useRef, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useRouter } from 'expo-router';
import Swiper from 'react-native-swiper';
import { styles } from './styles';
import Button from '@/components/Button/Button';
import COLORS from '@/config/colors';

export const Onboarding = () => {
    const router = useRouter();
    const handleSkip = () => {
        router.replace('/Login'); 
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
        <View style={styles.container}>
            <Swiper
                ref={swiperRef}
                loop={false}
                showsPagination={true}
                dotColor={COLORS.green[100]}
                activeDotColor={COLORS.green[400]}
                activeDotStyle={{ width: 20 }}
                paginationStyle={{ bottom: 30 }}
                onIndexChanged={(index) => setCurrentIndex(index)}>
                <View style={styles.slideContainer}>
                    <View style={styles.slideHeader}>
                        <Button text={'Pular'} variant={'secondary'} onPress={handleSkip} />
                    </View>
                    <View style={styles.infosContainer}>
                        <Image source={require('@/assets/images/onboarding-img-1.png')} style={styles.image1} />
                        <Text style={styles.title}>Bem-vindo ao ILPI App</Text>
                        <Text style={styles.text}>
                            O ILPI App é uma plataforma digital desenvolvida para facilitar a gestão e o acompanhamento
                            de idosos em instituições de longa permanência.
                        </Text>
                    </View>
                </View>
                <View style={styles.slideContainer}>
                    <View style={styles.slideHeader}>
                        <Button text={'Pular'} variant={'secondary'} onPress={handleSkip} />
                    </View>
                    <View style={styles.infosContainer}>
                        <Image source={require('@/assets/images/onboarding-img-2.png')} style={styles.image2} />
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
                        <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
                        <Text style={styles.title}>Junte-se a nós</Text>
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
                </View>
            </Swiper>
            {currentIndex < 2 && (
                <View style={styles.navButtonsContainer}>
                    {currentIndex === 1 && (
                        <Button
                            text={'Anterior'}
                            variant={'secondary'}
                            onPress={goToPrevious}
                            style={{ width: '40%' }}
                        />
                    )}

                    {currentIndex < 2 && (
                        <Button text={'Próximo'} variant={'primary'} onPress={goToNext} style={{ width: '40%' }} />
                    )}
                </View>
            )}
            {currentIndex === 2 && (
                <View style={styles.startButtonContainer}>
                    <Button text={'Vamos lá!'} variant={'primary'} onPress={handleSkip} style={{ width: '50%' }} />
                </View>
            )}
        </View>
    );
};
