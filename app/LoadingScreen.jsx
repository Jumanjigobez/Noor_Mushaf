import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const LoadingScreen = () => {
    return (
        <SafeAreaView style={styles.main}>


            <View style={styles.txtBox}>
                <Text style={styles.txt}>The Light of the Quran, Always With You!</Text>

            </View>

        </SafeAreaView>
    );
};

export default LoadingScreen;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#fafafa",
    },
})