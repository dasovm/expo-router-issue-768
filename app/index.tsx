import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View>
      <Text>Index</Text>
      <Link href="/app">To App</Link>
    </View>
  );
}
