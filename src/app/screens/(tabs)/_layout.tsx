import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#d1c8ba',
                tabBarInactiveTintColor: '#867f73',
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
    );
}
