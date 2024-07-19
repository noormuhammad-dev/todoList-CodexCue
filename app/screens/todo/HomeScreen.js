import { StyleSheet } from "react-native";
import { useCallback, useState } from "react";

import Screen from "./Screen";
import HomeHeader from "../../components/home/HomeHeader";
import CategoryList from "../../components/home/CategoryList";
import AllTodoList from "../../components/home/AllTodoList";
import ActiveCategoryTodoList from "../../components/home/ActiveCategoryTodoList";

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const onCategoryHandler = useCallback((category) => {
    setActiveCategory((preValue) => (preValue == category ? "All" : category));
  }, []);

  return (
    <Screen>
      <HomeHeader />
      <CategoryList
        activeCategory={activeCategory}
        onCategoryHandler={onCategoryHandler}
      />
      {activeCategory == "All" ? (
        <AllTodoList />
      ) : (
        <ActiveCategoryTodoList activeCategory={activeCategory} />
      )}
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
