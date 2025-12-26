import { SafeAreaView, StyleSheet } from "react-native";
import UIRenderer from "../components/UIRenderer";
import uiData from "../data/ui.json";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <UIRenderer components={uiData.components} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
