import { FontAwesome, Ionicons } from "@expo/vector-icons";

import { useRouter } from "expo-router";
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const WelcomeScreen = () => {
  const router = useRouter();


  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.imgBox}>
        <Image
          source={require("../assets/images/icon.png")}
          style={styles.img}
        />
      </View>

      <View style={styles.txtBox}>
        <Text style={styles.txt}>The Light of the Quran, Always With You!</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => router.push("/ReaderScreen")}
        >
          <Text style={styles.txtBtn}>
            Bismillah{" "}
            <Ionicons
              name="book-outline"
              size={24}
              color="white"
            // style={{ marginLeft: 50 }}
            />
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.coderBox}>
        <Text style={styles.coderTxt}>Coded With</Text>
        <FontAwesome
          name="heart"
          size={16}
          color="#d58eb0"
          style={{ marginHorizontal: 4, marginTop: 8 }}
        />
        <Text style={styles.coderTxt}>By</Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://jumanjigobez.github.io/personal_portfolio")
          }
          style={{ marginTop: 5, marginLeft: 2 }}
        >
          <Text style={styles.coderLink}>Jumanji</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fafafa",
  },
  imgBox: {
    width: "100%",
    height: "50%",
  },
  img: {
    width: "90%",
    height: "100%",
    resizeMode: "contain",
    alignSelf: "center",
  },

  txtBox: {
    width: "90%",
    marginTop: "-30",
    display: "flex",

    gap: 100,
  },
  txt: {
    fontFamily: "Amiri",
    fontSize: 24,
    textAlign: "center",
    lineHeight: 45,
    width: "80%",
    alignSelf: "center",
    // backgroundColor: "red",
  },

  btn: {
    backgroundColor: "#2596be",
    paddingHorizontal: "20",
    paddingVertical: "20",
    borderRadius: 15,
  },
  txtBtn: {
    fontFamily: "Amiri",
    fontSize: 22,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 2,
    textAlign: "center",
    color: "white",
  },
  icon: {
    marginTop: 200,
    marginLeft: 50,
  },

  coderBox: {
    marginTop: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 1,
  },

  coderTxt: {
    fontFamily: "Amiri",
    fontSize: 16,
  },
  coderLink: {
    fontFamily: "Amiri",
    fontSize: 16,
    fontWeight: "bold",
    color: "#d58eb0",
  },
});
