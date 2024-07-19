import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { memo } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const CategoryListItem = ({ category, index, active, onCategoryHandler }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        index != 0 && styles.spacing,
        active && styles.activeContainer,
      ]}
      onPress={() => onCategoryHandler(category)}
    >
      <Text style={[styles.text, active && styles.activeText]}>
        #{category}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(CategoryListItem);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#fff",
    paddingHorizontal: wp(3),
    borderRadius: 8,
    paddingVertical: hp(0.5),
  },
  text: {
    fontSize: hp(1.8),
    color: "#fff",
  },
  spacing: {
    marginLeft: wp(3),
  },
  activeContainer: {
    backgroundColor: "#CFFF46",
    borderColor: "#CFFF46",
  },
  activeText: {
    color: "#000",
  },
});