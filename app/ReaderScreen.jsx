import { Picker } from "@react-native-picker/picker";
import { useRef, useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  View,
  useColorScheme,
} from "react-native";
import PagerView from "react-native-pager-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { pages } from "../pages";
import { surahToPage } from "../SurahPages";

import { useKeepAwake } from "expo-keep-awake";

const ReaderScreen = () => {
  useKeepAwake();

  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const pagerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [loading, setLoading] = useState(false);
  // Pages sorted ascending [3 -> 606]
  const pageNumbers = Object.keys(pages)
    .map(Number)
    .sort((a, b) => b - a); //Arrange in Mushaf Like when swiping

  // Start at Fatiha (page 3)
  const initialIndex = pageNumbers.indexOf(3);

  const [selectedSurah, setSelectedSurah] = useState("1. Al-Fatiha");

  const handleSurahChange = (surahName) => {
    setLoading(true);
    setSelectedSurah(surahName);
    const pageNum = surahToPage[surahName];

    setTimeout(() => {
      if (pageNum) {
        const targetIndex = pageNumbers.indexOf(pageNum);
        pagerRef.current?.setPage(targetIndex);
      }
      setLoading(false);
    }, 3100);
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.searchContainer}>
        <Picker
          selectedValue={selectedSurah}
          style={{
            height: 50,
            width: "100%",
            zIndex: 100,
            backgroundColor: isDark ? "#eee" : "#eee",
            color: isDark ? "black" : "black",
          }}
          onValueChange={(itemValue) => handleSurahChange(itemValue)}
        >
          {Object.keys(surahToPage).map((surah) => (
            <Picker.Item key={surah} label={surah} value={surah} />
          ))}
        </Picker>
      </View>

      <PagerView
        ref={pagerRef}
        style={styles.pager}
        offscreenPageLimit={2}
        initialPage={initialIndex}
        onPageSelected={(e) => {
          setCurrentIndex(e.nativeEvent.position);
        }}
      >
        {pageNumbers.map((num, index) => {
          if (Math.abs(index - currentIndex) > 2) {
            return <View key={num} style={styles.image} />;
          }

          return (
            <View key={num} style={styles.image}>
              {loading ? (
                <ActivityIndicator
                  size="large"
                  color="#2596be"
                  style={styles.loader}
                />
              ) : (
                <Image
                  source={pages[num]}
                  style={styles.image}
                  resizeMode="contain"
                />
              )}
            </View>
          );
        })}
      </PagerView>
    </SafeAreaView>
  );
};

export default ReaderScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  searchContainer: {
    marginTop: "-10%",
    padding: 10,
    paddingVertical: 2,
    backgroundColor: "#eee",
  },

  pager: {
    marginTop: "-18%",
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  loader: {
    marginTop: "50%",
  },
});
