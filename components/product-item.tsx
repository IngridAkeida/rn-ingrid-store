import { Text, View } from "react-native";
import { Product } from "../types/product";

type props = {
  data: Product;
}

export default function ProductItem({ data } : props) {
  return (
    <View>
      <Text>Product {data.title} - {data.price}</Text>
    </View>
  );
}