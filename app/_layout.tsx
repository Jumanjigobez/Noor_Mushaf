import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Amiri: require("../assets/fonts/Amiri-Regular.ttf"),
  });

  // Hide splash as soon as first frame renders
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <Stack
      initialRouteName="WelcomeScreen"
      onLayout={onLayoutRootView} // hide splash after first render
    >
      <Stack.Screen name="WelcomeScreen" options={{ headerShown: false }} />
      <Stack.Screen name="ReaderScreen" options={{ title: "Noor Mushaf" }} />
      <Stack.Screen name="LoadingScreen" options={{ title: "Preparing..." }} />
    </Stack>
  );
}