import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Product } from "../types/product";
import { Link } from "expo-router";

type props = {
  data: Product;
}

export default function ProductItem({ data } : props) {
  return (
    <Link href={`/product/${data.id}`} asChild>
      <Pressable style={styles.container} >
        <Image 
          style={styles.image} 
          source={{ uri: data.image }}
          resizeMode="cover"
        />
        <View style={styles.info}>
          <Text>{data.title}</Text>
          <Text>{data.description}</Text>
          <Text> Kr {data.price.toFixed(2)}</Text>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 24,
    backgroundColor: "#ccc",
  },
  info: {
    flex: 1,
    marginLeft: 16,
  },
});