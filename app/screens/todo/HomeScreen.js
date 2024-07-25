import { ActivityIndicator, StyleSheet } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";
import { todoAction } from "../../store/slice/todoSlice";
import { categoryActions } from "../../store/slice/categorySlice";

import Screen from "./Screen";
import HomeHeader from "../../components/home/HomeHeader";
import CategoryList from "../../components/home/CategoryList";
import AllTodoList from "../../components/home/AllTodoList";
import ActiveCategoryTodoList from "../../components/home/ActiveCategoryTodoList";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [stopStoringDB, setStopStoringDB] = useState(false);

  useEffect(() => {
    const getDataFromDB = async () => {
      try {
        const categoryData = await AsyncStorage.getItem("categoryData");
        const todoData = await AsyncStorage.getItem("todoData");
        dispatch(categoryActions.setCategory(JSON.parse(categoryData)));
        dispatch(todoAction.setTodo(JSON.parse(todoData)));
        setIsLoading(false);
        setStopStoringDB(true);
      } catch (err) {
        console.log(err);
      }
    };

    getDataFromDB();
  }, []);

  const todoData = useSelector((state) => state.todo);
  const categoryData = useSelector((state) => state.category);

  // when the data change it also change in AsyncStorage
  useEffect(() => {
    if (stopStoringDB) {
      AsyncStorage.setItem("categoryData", JSON.stringify(categoryData));
    }
  }, [categoryData]);

  useEffect(() => {
    if (stopStoringDB) {
      AsyncStorage.setItem("todoData", JSON.stringify(todoData));
    }
  }, [todoData]);

  const onCategoryHandler = useCallback((category) => {
    setActiveCategory((preValue) => (preValue == category ? "All" : category));
  }, []);

  return (
    <Screen>
      <HomeHeader />
      {isLoading ? (
        <ActivityIndicator size={hp(3.5)} color={"#fff"} />
      ) : (
        <>
          <CategoryList
            activeCategory={activeCategory}
            onCategoryHandler={onCategoryHandler}
          />
          {activeCategory === "All" ? (
            <AllTodoList />
          ) : (
            <ActiveCategoryTodoList activeCategory={activeCategory} />
          )}
        </>
      )}
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
