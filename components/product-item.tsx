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
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.description}>{data.description}</Text>
          <Text style={styles.price}> Kr {data.price.toFixed(2)}</Text>
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
    paddingRight: 16,
    backgroundColor: "#fff",
    borderBottomEndRadius: 18,
    borderTopEndRadius: 18,
    borderTopStartRadius: 24,
    borderBottomStartRadius: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
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
  title: {
    paddingTop: 8,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 12,
    color: "#555",
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
    color: "green",
  },
});