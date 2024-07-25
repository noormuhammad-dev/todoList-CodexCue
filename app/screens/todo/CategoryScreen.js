import { Alert, StyleSheet, TextInput, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { categoryActions } from "../../store/slice/categorySlice";
import { debounce } from "lodash";

import Screen from "./Screen";
import ActionButton from "../../components/addOrEdit/ActionButton";
import CategoryList from "../../components/home/CategoryList";
import BackButton from "../../components/ui/BackButton";

const CategoryScreen = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const categoryInpRef = useRef(null);

  const handleAddCategory = useCallback(() => {
    if (category.trim().length == 0) {
      Alert.alert("Input Required", "Please write the category to add");
      return;
    }

    dispatch(categoryActions.addCategory(category.trim()));
    setCategory("");
    categoryInpRef.current.clear();
  }, [category]);

  const handleCategoryChange = useCallback(
    debounce((txt) => {
      setCategory(txt);
    }, 400),
    []
  );

  return (
    <Screen>
      <View style={styles.container}>
        <BackButton />
        <View style={styles.inputAndButtonContainer}>
          <TextInput
            onChangeText={(txt) => handleCategoryChange(txt)}
            style={styles.inp}
            placeholder="category"
            ref={categoryInpRef}
          />
          <View style={styles.btnContainer}>
            <ActionButton onPress={handleAddCategory} bgColor={"#CFFF46"}>
              Add
            </ActionButton>
          </View>
        </View>
        <CategoryList forCategoryScreen />
      </View>
    </Screen>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(4),
  },
  inputAndButtonContainer: {
    flexDirection: "row",
    gap: wp(2),
  },
  inp: {
    backgroundColor: "#fff",
    flex: 1,
    borderRadius: 12,
    fontSize: hp(1.8),
    paddingHorizontal: wp(3),
  },
  btnContainer: {
    flex: 0.5,
  },
});
