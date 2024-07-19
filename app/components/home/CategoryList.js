import { FlatList, StyleSheet, View } from "react-native";
import { memo } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSelector } from "react-redux";

import CategoryListItem from "./CategoryListItem";
import AddCategoryButton from "./AddCategoryButton";

const CategoryList = ({ activeCategory, onCategoryHandler }) => {
  const categoryList = useSelector((state) => state.category);

  return (
    <View>
      <FlatList
        data={categoryList}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <CategoryListItem
            onCategoryHandler={onCategoryHandler}
            active={activeCategory === item}
            category={item}
            index={index}
          />
        )}
        horizontal
        contentContainerStyle={styles.contentContainerStyle}
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={<AddCategoryButton />}
      />
    </View>
  );
};

export default memo(CategoryList);

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    alignItems: "center",
  },
});
