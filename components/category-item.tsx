import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Category } from "../types/category";

type props = {
  data: Category;
}

export default function CategoryItem({ data } : props) {
  return (
    <Pressable style={styles.container} >
      <Text>{data.title}</Text>
    </Pressable>
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