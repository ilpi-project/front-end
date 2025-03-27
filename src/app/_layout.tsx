import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="screens/Onboarding/index" />
      <Stack.Screen name="screens/Login/index" />
      <Stack.Screen name="screens/Home/index" />
    </Stack>
  );
}
