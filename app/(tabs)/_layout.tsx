import { Provider } from 'react-redux';
import { Tabs } from 'expo-router';
import { store } from '@/store';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
    return (
        <Provider store={store}>
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: '#d1c8ba',
                    tabBarInactiveTintColor: '#d1c8ba',
                    tabBarStyle: {
                        backgroundColor: '#1e3d29',
                        height: 60,
                    },

                    tabBarLabelStyle: {
                        fontSize: 12,
                    },
                }}>
                <Tabs.Screen
                    name="Schedule"
                    options={{
                        title: 'Agenda',
                        tabBarIcon: ({ color, size, focused }) => (
                            <Ionicons name={focused ? 'calendar' : 'calendar-outline'} size={size} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="Services"
                    options={{
                        title: 'Serviços',
                        tabBarIcon: ({ color, size, focused }) => (
                            <Ionicons name={focused ? 'briefcase' : 'briefcase-outline'} size={size} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="Home"
                    options={{
                        title: 'Início',
                        tabBarIcon: ({ color, size, focused }) => (
                            <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="Contact"
                    options={{
                        title: 'Contato',
                        tabBarIcon: ({ color, size, focused }) => (
                            <Ionicons name={focused ? 'call' : 'call-outline'} size={size} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="Profile"
                    options={{
                        title: 'Perfil',
                        tabBarIcon: ({ color, size, focused }) => (
                            <Ionicons name={focused ? 'person' : 'person-outline'} size={size} color={color} />
                        ),
                    }}
                />
            </Tabs>
        </Provider>
    );
}
