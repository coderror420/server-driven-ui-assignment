import {Text, TouchableOpacity } from "react-native";

export default function ButtonBlock({ item, onPress, theme }: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#FF5733",
        padding: 14,
        borderRadius: 10,
        marginTop: 12,
      }}
    >
      <Text style={{ color: "#fff", textAlign: "center" }}>
        {item.text}
      </Text>
    </TouchableOpacity>
  );
}
