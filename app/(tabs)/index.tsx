import { Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-neutral-950">
      <Text className={"text-green-100 text-4xl font-semibold"}>
        Open up App.js to start working on your app!
      </Text>
    </SafeAreaView>
  );
}
