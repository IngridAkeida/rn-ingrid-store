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
        <View>
          <Text>{data.title}</Text>
          <Text>{data.price}</Text>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 24,
  }
});