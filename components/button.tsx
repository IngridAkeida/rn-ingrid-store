import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
}


export const Button = ({ title, onPress }: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.button} >
        <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#124e85',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  }
});