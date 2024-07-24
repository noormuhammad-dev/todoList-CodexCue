import { StyleSheet, TouchableOpacity } from "react-native";
import { memo } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { todoAction } from "../../store/slice/todoSlice";
import { useNavigation } from "@react-navigation/native";
import { categoryActions } from "../../store/slice/categorySlice";

const DeleteButton = ({ id, isForCategory }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleDelete = () => {
    if (isForCategory) {
      dispatch(categoryActions.deleteCategory(id));
    } else {
      dispatch(todoAction.deleteTodo(id));
      navigation.goBack();
    }
  };

  return (
    <TouchableOpacity
      onPress={handleDelete}
      style={[styles.container, isForCategory && { top: -10, right: -10 }]}
    >
      <MaterialIcons
        name="delete"
        size={isForCategory ? hp(1.8) : hp(3)}
        color="tomato"
      />
    </TouchableOpacity>
  );
};

export default memo(DeleteButton);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: hp(3),
    right: wp(10),
    zIndex: 10,
    backgroundColor: "#80808049",
    padding: hp(0.8),
    borderRadius: 55,
  },
});
