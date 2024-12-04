import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/sources/logo.png')} style={styles.logo} resizeMode="cover"/>
      <View>
        <Text style={styles.h1}> Ingrid's Store</Text>
        <Text style={styles.h2}> IHere you can find everything you want!</Text>
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
  logo:{
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  h1: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  h2: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
});
