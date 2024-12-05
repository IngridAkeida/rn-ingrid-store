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
      <View style={styles.bg}></View>
      <View style={styles.bgContent}>
        <Text style={styles.title}>{data.title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 18,
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
    borderRadius: 18,
  },
  bg: {
    position: "absolute",
    width: "100%",
    height: 150,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 18,
  },
  bgContent: {
    height: 150,
    marginTop: -150,
    justifyContent: "center",
    alignItems: "center",
  },
  title:{
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  }
});