import { Picker } from "@react-native-picker/picker";
import { useRef, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import PagerView from "react-native-pager-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { pages } from "../pages";
import { surahToPage } from "../SurahPages";
const ReaderScreen = () => {
  const pagerRef = useRef(null);

  // Pages sorted ascending [3 -> 606]
  const pageNumbers = Object.keys(pages)
    .map(Number)
    .sort((a, b) => b - a);

  // Start at Fatiha (page 3)
  const initialIndex = pageNumbers.indexOf(3);

  const [selectedSurah, setSelectedSurah] = useState("Al-Fatiha");

  const handleSurahChange = (surahName) => {
    setSelectedSurah(surahName);
    const pageNum = surahToPage[surahName];
    if (pageNum) {
      const targetIndex = pageNumbers.indexOf(pageNum);
      pagerRef.current?.setPage(targetIndex);
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      {/* Surah selector */}
      <View style={styles.searchContainer}>
        <Picker
          selectedValue={selectedSurah}
          style={styles.picker}
          onValueChange={(itemValue) => handleSurahChange(itemValue)}
        >
          {Object.keys(surahToPage).map((surah) => (
            <Picker.Item key={surah} label={surah} value={surah} />
          ))}
        </Picker>
      </View>

      {/* PagerView */}
      <PagerView
        ref={pagerRef}
        style={styles.pager}
        initialPage={initialIndex}
        orientation="horizontal"
        onPageScroll={(e) => {
          const position = e.nativeEvent.position;
          // // Prevent swiping before Fatiha (index 0)
          // if (position < initialIndex) {
          //   pagerRef.current?.setPage(initialIndex);
          // }
        }}
      >
        {pageNumbers.map((num) => (
          <Image
            key={num}
            source={pages[num]}
            style={styles.image}
            resizeMode="contain"
          />
        ))}
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
    padding: 8,
    backgroundColor: "#eee",
  },
  picker: {
    height: 50,
    width: "100%",
  },
  pager: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
