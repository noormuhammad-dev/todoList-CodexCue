import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { memo } from "react";

const AddCategoryButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Ionicons name="add" color={"#fff"} size={hp(2)} />
    </TouchableOpacity>
  );
};

export default memo(AddCategoryButton);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 50,
    padding: hp(0.4),
    opacity: 0.7,
    marginLeft: wp(4),
  },
});
