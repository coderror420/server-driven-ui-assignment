import { SafeAreaView, StyleSheet } from "react-native";
import UIRenderer from "../components/UIRenderer";
import uiLight from "../data/ui.json";
import uiDark from "../data/ui.darktheme.json";
import { useTheme } from "../hooks/use-theme";

export default function Index() {
  const { theme, isDark, toggleTheme } = useTheme();

  const handleAction = (action: string) => {
    switch (action) {
      case "toggle_theme":
        toggleTheme(); // 🔥 switches theme + UI
        break;

      case "navigate_to_menu":
        console.log("navigating to menu...");
        break;

      default:
        console.warn("unknown action:", action);
    }
  };

  const uiData = isDark ? uiDark : uiLight;

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isDark ? "#121212" : "#ffffff" },
      ]}
    >
      <UIRenderer
        components={uiData.components}
        onAction={handleAction}
        theme={theme}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
