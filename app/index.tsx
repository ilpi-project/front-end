import { View, SafeAreaView, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Onboarding } from '@/screens/Onboarding/Onboarding';
import COLORS from '@/config/colors';
import 'setimmediate';

export default function Index() {
    const [appReady, setAppReady] = useState(false);

    const [fontsLoaded] = useFonts({
        'Oxygen-Light': require('@/assets/fonts/Oxygen-Light.ttf'),
        'Oxygen-Regular': require('@/assets/fonts/Oxygen-Regular.ttf'),
        'Oxygen-Bold': require('@/assets/fonts/Oxygen-Bold.ttf'),
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
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.beige }}>
                <StatusBar style="dark" />
                <ActivityIndicator size="large" color={COLORS.green[400]} />
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar style="dark" backgroundColor={COLORS.beige} />
            <Onboarding />
        </SafeAreaView>
    );
}
