import { Stack } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView, Text, View } from "react-native";
import { Button } from "../../components/button";

export default function Screen() {
  const handleBasket = () => {
    
  }
  const handleBuy = () => {

  }
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: '' }} />
      <ScrollView style={styles.area}>
        <View>
          <Text>Product</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonArea}>
        <Button title="Add to Basket" onPress={handleBasket}/>
        <Button title="Buy Now" onPress={handleBuy}/>
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
    padding: 10,
  },
  buttonArea: {
    padding: 10,
    flexDirection: 'row',
    gap: 10,
  },
});