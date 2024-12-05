import { Stack } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView, Text, View } from "react-native";

export default function Screen() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: '' }} />
      <ScrollView style={styles.area}>
        <View>
          <Text>Product</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonArea}>
        <Text>Button</Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  area: {
    flex: 1,
    width: '100%',
  },
  buttonArea: {
    width: '100%',
    padding: 10,
  },
});