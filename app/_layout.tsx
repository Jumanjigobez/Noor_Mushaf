import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack initialRouteName="WelcomeScreen">
      <Stack.Screen name="WelcomeScreen" options={{ headerShown: false }} />
      <Stack.Screen name="ReaderScreen" options={{ title: "Quran Reader" }} />
    </Stack>
  );
}
