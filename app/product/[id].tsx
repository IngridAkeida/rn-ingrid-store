import { router, Stack, useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView, Text, View } from "react-native";
import { Button } from "../../components/button";
import { getProductsById } from "../../services/products";

export default function Screen() {
  const { id } = useLocalSearchParams();
  const idProduct = parseInt(id as string);

  const product = getProductsById(idProduct);

  if (!product) return router.back();

  const handleBasket = () => {
    alert(`The product ${product.title} added to Basket`);
  }
  const handleBuy = () => {
    alert(`You bought the item ${product.title}, enjoy!`);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: '' }} />
      <ScrollView style={styles.area}>
        <View>
          <Text>{product.title}</Text>
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