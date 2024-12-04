import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Category } from "../types/category";
import { router } from "expo-router";

type props = {
  data: Category;
}

export default function CategoryItem({ data } : props) {
  const handleClick = () => {
    router.push(`categories/${data.id}`);
  };
  return (
    <Pressable onPress={handleClick} style={styles.container} >
      <Image 
        source={{uri: data.cover }} 
        style={styles.image} 
        resizeMode="cover"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 24,
  },
});