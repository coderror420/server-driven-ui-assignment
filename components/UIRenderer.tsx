import { View } from "react-native";
import TextBlock from "./ui/TextBlock"
import ImageBlock from "./ui/ImageBlock";
import ButtonBlock from "./ui/ButtonBlock";

type ComponentItem = {
  type: string;
  [key: string]: any;
};

export default function UIRenderer({
  components,
}: {
  components: ComponentItem[];
}) {
  return (
    <View>
      {components.map((item, index) => {
        switch (item.type) {
          case "text":
            return <TextBlock key={index} item={item} />;
          case "image":
            return <ImageBlock key={index} item={item} />;
          case "button":
            return <ButtonBlock key={index} item={item} />;
          default:
            return null;
        }
      })}
    </View>
  );
}
