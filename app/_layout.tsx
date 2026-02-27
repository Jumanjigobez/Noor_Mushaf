import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded] = useFonts({
    Amiri: require("../assets/fonts/Amiri-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack initialRouteName="WelcomeScreen">
      <Stack.Screen name="WelcomeScreen" options={{ headerShown: false }} />
      <Stack.Screen name="ReaderScreen" options={{ title: "Noor Mushaf" }} />
      <Stack.Screen name="LoadingScreen" options={{ title: "Preparing..." }} />
    </Stack>
  );
}
