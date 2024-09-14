import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function Welcome() {
  return (
    <SafeAreaView
      className={
        "p-4 bg-neutral-50 min-h-screen flex items-center justify-center"
      }
    >
      <Text className={"font-NanumEB text-4xl"}>Welcome</Text>
      <TouchableOpacity onPress={() => router.replace("/(auth)/sign-in")}>
        <Text className={"text-black text-md font-Nanum"}>Skip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
