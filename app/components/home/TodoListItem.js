import { StyleSheet, Text, View } from "react-native";
import { memo } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const TodoListItem = ({ item, index, activeCategoryStyles }) => {
  return (
    <View
      style={[
        styles.container,
        index != 0 && !activeCategoryStyles && styles.spacing,
        !activeCategoryStyles && {
          width: wp(48),
        },
        activeCategoryStyles && {
          marginHorizontal: wp(1.5),
          marginVertical: hp(1),
        },
      ]}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Text numberOfLines={5} style={styles.description}>
        {item.description}
      </Text>
    </View>
  );
};

export default memo(TodoListItem);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    height: hp(28),
    marginVertical: hp(2),
    padding: hp(1),
    flex: 1,
  },
  spacing: {
    marginLeft: wp(3),
  },
  title: {
    fontSize: hp(2),
    fontWeight: "500",
  },
  date: {
    fontSize: hp(1.6),
    opacity: 0.6,
    marginTop: hp(0.5),
  },
  description: {
    fontSize: hp(1.75),
    marginTop: hp(1.4),
    opacity: 0.7,
  },
});
