import { Text, TouchableOpacity, Alert } from "react-native";
const ButtonBlock = ({ item }: { item: any })=>{
  return (
    <TouchableOpacity
      onPress={() => Alert.alert("Action", item.action || "clicked")}
      style={{ padding: 12, backgroundColor: "#000", marginTop: 10 }}
    >
      <Text style={{ color: "#fff", textAlign: "center" }}>
        {item.text}
      </Text>
    </TouchableOpacity>
  );
}

export default ButtonBlock;