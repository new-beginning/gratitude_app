import { View, Text } from "react-native";
import { Stack, Tabs } from "expo-router";
import Toast from "react-native-toast-message";
import COLORS from "../../../constants/COLORS";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

const GratitudeLayout = () => {
  return (
    <>
      <Stack
        initialRouteName="gratitudes"
        screenOptions={{
          headerShown: false,
          animation: "none",
          // animationDuration: 500,
          gestureEnabled: true,
          gestureDirection: "vertical",
        }}
      />
      <Toast />
    </>
  );
};

export default GratitudeLayout;
