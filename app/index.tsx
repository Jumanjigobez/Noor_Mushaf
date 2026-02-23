import { StyleSheet, Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View>
        <Text>Bismillah!</Text>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
