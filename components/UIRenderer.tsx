import {ScrollView, StyleSheet } from "react-native";
import TextBlock from "./ui/TextBlock";
import ImageBlock from "./ui/ImageBlock";
import ButtonBlock from "./ui/ButtonBlock";

export default function UIRenderer({ components, onAction, theme }: any) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {components.map((item: any, index: number) => {
        switch (item.type) {
          case "text":
            return <TextBlock key={index} item={item} theme={theme} />;

          case "image":
            return <ImageBlock key={index} item={item} />;

          case "button":
            return (
              <ButtonBlock
                key={index}
                item={item}
                theme={theme}
                onPress={() => item.action && onAction(item.action)}
              />
            );

          default:
            return null;
        }
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",     // ⬅ horizontal center
    justifyContent: "center", // ⬅ vertical center
    paddingVertical: 24,
    gap: 16,                  // ⬅ uniform spacing
  },
});
