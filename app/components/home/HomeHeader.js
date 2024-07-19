import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { memo } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Notes</Text>
      <TouchableOpacity onPress={() => navigation.navigate("addOrEditScreen")}>
        <View style={styles.addButton}>
          <Ionicons name="add" size={hp(3)} color="#fff" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default memo(HomeHeader);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(4),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: hp(2),
  },
  title: {
    fontSize: hp(3),
    color: "#fff",
    fontWeight: "500",
    letterSpacing: 1.4,
  },
  addButton: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 6,
    padding: hp(0.8),
  },
});
