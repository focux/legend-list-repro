import "react-native-reanimated";

import { LegendList } from "@legendapp/list";
import { ScrollViewProps, View } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
  Text,
} from "react-native-gesture-handler";

const CustomScrollView = (props: ScrollViewProps) => {
  return <ScrollView {...props} />;
};

const syntheticData = Array.from({ length: 1000 }, (_, index) => ({
  id: index,
  name: `Item ${index}`,
  description: `Description ${index}`,
}));

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <LegendList
        data={syntheticData}
        // stickyIndices={[0]}
        renderItem={({ item }) => (
          <View style={{ padding: 16 }}>
            <Text>{item.name}</Text>
          </View>
        )}
        renderScrollComponent={CustomScrollView}
        recycleItems
      />
    </GestureHandlerRootView>
  );
}
