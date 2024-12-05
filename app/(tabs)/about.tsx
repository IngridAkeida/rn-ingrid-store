import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';

const AboutUs = () => {
  const handleLinkPress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>About the Store</Text>
        <Text style={styles.text}>
          Welcome to our store! We offer exclusive products made with care and attention to detail. Our goal is to bring products that brighten
          your day and make your life more special.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>About Me</Text>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/86308973?v=4' }} 
          style={styles.image}
        />
        <Text style={styles.name}>Ingrid Sanches</Text>
        <Text style={styles.text}>
          I am a Frontend Developer passionate about technology, UI/UX, and innovation. Currently, I live in Sweden and share my journey as an
          immigrant and developer.
        </Text>
        <View style={styles.linksContainer}>
          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => handleLinkPress('https://github.com//IngridAkeida')}
          >
            <Text style={styles.linkText}>GitHub</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => handleLinkPress('https://linkedin.com/in/ingrid-sanches')}
          >
            <Text style={styles.linkText}>LinkedIn</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => handleLinkPress('https://portfolio-ingridsanches.netlify.app/')}
          >
            <Text style={styles.linkText}>Portfolio</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  section: {
    marginBottom: 30,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  text: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  linkButton: {
    backgroundColor: '#6200ea',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  linkText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AboutUs;
