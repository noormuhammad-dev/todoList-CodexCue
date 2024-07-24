import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.container}
    >
      <Ionicons name="chevron-back" size={hp(2.5)} color="#fff" />
    </TouchableOpacity>
  );
};

export default memo(BackButton);

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    padding: hp(1.2),
    borderRadius: 100,
    marginVertical: hp(2),
    backgroundColor: "#ffffff41",
    marginBottom: hp(5),
  },
});
