import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding/index" />
      <Stack.Screen name="Login/index" />
      <Stack.Screen name="Home/index" />
    </Stack>
  );
}
