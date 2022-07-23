import React from "react";
import { RestaurantsScreen } from "./src/features/screens/restaurants.screen";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
