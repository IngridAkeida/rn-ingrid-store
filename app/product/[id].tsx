import { StyleSheet } from "react-native";
import { SafeAreaView, Text, View } from "react-native";

export default function Screen() {
  return (
    <SafeAreaView style={styles.container}>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});