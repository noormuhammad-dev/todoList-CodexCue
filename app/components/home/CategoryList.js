import { FlatList, StyleSheet, View } from "react-native";
import { memo } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSelector } from "react-redux";

import CategoryListItem from "./CategoryListItem";
import AddCategoryButton from "./AddCategoryButton";

const CategoryList = ({
  activeCategory,
  onCategoryHandler,
  forCreateAndEdit,
  forCategoryScreen,
}) => {
  const categoryList = useSelector((state) => state.category);

  return (
    <View>
      <FlatList
        data={categoryList}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => {
          if ((forCreateAndEdit || forCategoryScreen) && item == "All") {
            return;
          }
          return (
            <CategoryListItem
              onCategoryHandler={onCategoryHandler}
              active={activeCategory === item}
              category={item}
              index={forCreateAndEdit ? index - 1 : index}
              forCreateAndEdit={forCreateAndEdit}
              forCategoryScreen={forCategoryScreen}
            />
          );
        }}
        horizontal={forCategoryScreen ? false : true}
        contentContainerStyle={[
          styles.contentContainerStyle,
          (forCreateAndEdit || forCategoryScreen) && { paddingHorizontal: 0 },
          forCategoryScreen && { alignItems: "flex-start" },
        ]}
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={
          !forCategoryScreen && !forCreateAndEdit && <AddCategoryButton />
        }
        numColumns={forCategoryScreen && 3}
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
