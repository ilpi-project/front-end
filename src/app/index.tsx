import Onboarding from '@/app/Onboarding';
import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import colors from './config/colors';

export default function Index() {
    const [appReady, setAppReady] = useState(false);

    const [fontsLoaded] = useFonts({
        'Oxygen-Light': require('@/app/assets/fonts/Oxygen-Light.ttf'),
        'Oxygen-Regular': require('@/app/assets/fonts/Oxygen-Regular.ttf'),
        'Oxygen-Bold': require('@/app/assets/fonts/Oxygen-Bold.ttf'),
    });

    useEffect(() => {
        async function prepare() {
            try {
                await SplashScreen.preventAutoHideAsync();

                if (fontsLoaded) {
                    setAppReady(true);
                    await SplashScreen.hideAsync();
                }
            } catch (error) {
                console.warn(error);
            }
        }

        prepare();
    }, [fontsLoaded]);

    if (!appReady) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.beige }}>
                <StatusBar style="dark" />
                <ActivityIndicator size="large" color={colors.green[400]} />
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar style="dark" />
            <Onboarding />
        </SafeAreaView>
    );
}
