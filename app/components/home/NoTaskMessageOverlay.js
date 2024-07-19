import { StyleSheet, Text } from "react-native";
import { memo } from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const NoTaskMessageOverlay = () => {
  return (
    <Text style={styles.emptyListMessage}>
      No tasks available in this category.
    </Text>
  );
};

export default memo(NoTaskMessageOverlay);

const styles = StyleSheet.create({
  emptyListMessage: {
    fontSize: hp(1.65),
    color: "#fff",
    textAlign: "center",
    marginVertical: hp(2),
    opacity: 0.7,
  },
});
