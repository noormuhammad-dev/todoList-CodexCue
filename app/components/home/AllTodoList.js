import { StyleSheet, View } from "react-native";
import { memo } from "react";
import { useSelector } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FlashList } from "@shopify/flash-list";

import TodoListItem from "./TodoListItem";
import ListHeader from "./ListHeader";
import NoTaskMessageOverlay from "./NoTaskMessageOverlay";

const AllTodoList = () => {
  const todoData = useSelector((state) => state.todo);
  const categoryData = useSelector((state) => state.category);

  return (
    <View style={styles.container}>
      <FlashList
        estimatedItemSize={200}
        data={categoryData}
        contentContainerStyle={{ paddingBottom: hp(10) }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: categoryItem }) => {
          if (categoryItem == "All") {
            return;
          }
          return (
            <View>
              <ListHeader category={categoryItem} />
              {todoData.filter((item) => item.category == categoryItem) == 0 ? (
                <NoTaskMessageOverlay />
              ) : (
                <FlashList
                  contentContainerStyle={styles.contentContainerStyle}
                  data={todoData.filter(
                    (item) => item.category == categoryItem
                  )}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item, index }) => {
                    return <TodoListItem index={index} item={item} />;
                  }}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  estimatedItemSize={200}
                />
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

export default memo(AllTodoList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingHorizontal: wp(4),
  },
});
