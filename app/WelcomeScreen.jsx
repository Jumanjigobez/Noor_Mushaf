import { Button, StyleSheet, Text, View } from "react-native";

import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const WelcomeScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.main}>
      <View>
        <Text>Bismillah!</Text>
        <Button title="Go Read" onPress={() => router.push("/ReaderScreen")} />
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "red",
  },
});
