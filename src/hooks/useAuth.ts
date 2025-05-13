import { API_BASE_URL } from '@/config/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export const useAuth = () => {
    const router = useRouter();

    useEffect(() => {
        let isMounted = true;

        const checkToken = async () => {
            const token = await AsyncStorage.getItem('userToken');
            
            if (!token && isMounted) {
                return router.replace('/Login');
            }

            try {
                await axios.get(`${API_BASE_URL}/users/validate-user`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            } catch (e) {
                if (isMounted) {
                    router.replace('/Login');
                }
            }
        };

        checkToken();

        return () => {
            isMounted = false;
        };

    }, []);
};
