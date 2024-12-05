import { router, Stack, useLocalSearchParams } from "expo-router";
import { Image, Pressable, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView, Text, View } from "react-native";
import { Button } from "../../components/button";
import { getProductsById } from "../../services/products";

export default function Screen() {
  const { id } = useLocalSearchParams();
  const idProduct = parseInt(id as string);

  const product = getProductsById(idProduct);

  if (!product) return router.back();

  const promo = product.price * 0.7;

  const handleBasket = () => {
    alert(`The product ${product.title} added to Basket`);
  }
  const handleBuy = () => {
    alert(`You bought the item ${product.title}, enjoy!`);
  }

  const handleInfo = () => {
    alert('For price reduction announcements, such as limited-time promotions, we display the product\'s Lowest Recent Price on Amazon.se for the last 30 days before the price reduction is applied. In addition to the Lowest Recent Price, you may also see a List Price or Was Price, for price comparisons purposes only.');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: '' }} />
      <ScrollView style={styles.area}>
        <Image 
          source={{ uri: product.image }} 
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.description2}>
          loren ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio nec nunc tincidunt aliquam nec nec odio nec nunc tincidunt aliquam nec.
        </Text>
        <Text style={styles.description2}>
          loren ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio nec nunc tincidunt aliquam nec nec odio nec nunc tincidunt aliquam nec.
        </Text>
        <View style={styles.rowArea}>
          <Text style={styles.pricePromo}> 30% Off</Text>
          <Text style={styles.price}> Kr {promo.toFixed(2)}</Text>
        </View>
        <Text style={styles.priceDetails}> Original price 
          <Text style={styles.priceDetailsLined}> Kr {product.price.toFixed(2)}</Text>
          <Button title="ℹ️" onPress={handleInfo}/>
          <Pressable onPress={handleInfo} style={styles.buttonInfo} >
            <Text style={styles.text}>ℹ️</Text>
          </Pressable>
        </Text>
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
  },
  area: {
    flex: 1,
    padding: 10,
  },
  buttonArea: {
    padding: 10,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  rowArea: {
    padding: 10,
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 24,
    color: "#555",
    marginBottom: 20,
  },
  description2: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
  pricePromo: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
    color: "red",
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "right",
    color: "green",
  },
  priceDetails: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "right",
    color: "grey",
  },
  priceDetailsLined: {
    textDecorationLine: "line-through",
    fontWeight: 'bold',
    color: "#555",
  },
});