import { Text } from "react-native";

export default function TextBlock({ item, theme }: any) {
  return (
    <Text
      style={[
        item.style,
        { color: theme === "dark" ? "#E0E0E0" : item.style?.color },
      ]}
    >
      {item.value}
    </Text>
  );
}
