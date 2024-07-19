import { StyleSheet, View } from "react-native";
import { memo, useMemo } from "react";
import { useSelector } from "react-redux";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FlashList } from "@shopify/flash-list";

import TodoListItem from "./TodoListItem";
import NoTaskMessageOverlay from "./NoTaskMessageOverlay";

const ActiveCategoryTodoList = ({ activeCategory }) => {
  const todoData = useSelector((state) => state.todo);

  const ActiveCategoryData = useMemo(
    () => todoData.filter((item) => item.category == activeCategory),
    [activeCategory, todoData]
  );

  return (
    <View style={styles.container}>
      {ActiveCategoryData.length == 0 ? (
        <NoTaskMessageOverlay />
      ) : (
        <FlashList
          estimatedItemSize={200}
          data={ActiveCategoryData}
          renderItem={({ item }) => {
            return <TodoListItem item={item} activeCategoryStyles={true} />;
          }}
          numColumns={2}
          contentContainerStyle={{ paddingHorizontal: wp(2.5) }}
        />
      )}
    </View>
  );
};

export default memo(ActiveCategoryTodoList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
