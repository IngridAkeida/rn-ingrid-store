import { FlatList, StyleSheet, Text, View } from "react-native";
import { getAllProducts } from '../../services/products';

export default function Home() {
  const products = getAllProducts();
  return (
    <View style={styles.container}>
      <FlatList 
        data={products}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={item => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flex: 1,
    width: '100%',
    padding: 24,
  },
});