import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";
import { memo } from "react";

import Constants from "expo-constants";

const Screen = ({ children }) => {
  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        translucent
        backgroundColor={"transparent"}
      />
      <ImageBackground
        blurRadius={50}
        style={styles.screen}
        source={require("../../assets/bg.jpg")}
      >
        <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default memo(Screen);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
