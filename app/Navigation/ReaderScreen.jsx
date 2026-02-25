import { Image, StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";
import { pages } from "../../pages";

const ReaderScreen = () => {
  const pageNumbers = Object.keys(pages)
    .map(Number)
    .sort((a, b) => b - a); // [606 -> 3]

  return (
    <PagerView style={styles.pager} initialPage={606}>
      {pageNumbers.map((num, index) => (
        <Image
          key={index}
          source={pages[num]}
          style={styles.image}
          resizeMode="contain"
        />
      ))}
    </PagerView>
  );
};

export default ReaderScreen;

const styles = StyleSheet.create({
  pager: {
    backgroundColor: "red",
    height: "100%",
    width: "100%",
    position: "relative",
  },
  image: { backgroundColor: "blue", width: "100%", height: "100%" },
});
