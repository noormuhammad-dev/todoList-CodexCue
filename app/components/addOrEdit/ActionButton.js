import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { memo } from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const ActionButton = ({ children, bgColor, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.container, { backgroundColor: bgColor }]}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default memo(ActionButton);

const styles = StyleSheet.create({
  container: {
    paddingVertical: hp(1),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  text: {
    fontSize: hp(2),
  },
});
