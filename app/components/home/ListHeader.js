import { StyleSheet, Text, View } from "react-native";
import { memo } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ListHeader = ({ category }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>#{category}</Text>
    </View>
  );
};

export default memo(ListHeader);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(4),
    borderBottomWidth: 1,
    borderColor: "#fff",
    paddingVertical:hp(1),
  },
  text: {
    fontSize: hp(2),
    color: "#fff",
  },
});
