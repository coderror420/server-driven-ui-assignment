import { Image, StyleSheet } from "react-native";
import { imageRegistry } from "../../assets/image-registry";

export default function ImageBlock({ item }: any) {
  const source =
    item.source === "local"
      ? imageRegistry[item.name] 
      : { uri: item.url };       

  return (
    <Image
      source={source}
      style={styles.image}
      resizeMode="cover"
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 280,
    height: 180,
    borderRadius: 16,
  },
});
