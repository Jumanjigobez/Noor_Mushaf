import { Button, StyleSheet, Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.main}>
      <View>
        <Text>Bismillah!</Text>
        <Button title="Go Read" onPress={() => navigation.navigate("Reader")} />
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
