import { useCallback, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";
import { formatDate } from "../../util/common";
import { useDispatch } from "react-redux";
import { todoAction } from "../../store/slice/todoSlice";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import Screen from "./Screen";
import ActionButton from "../../components/addOrEdit/ActionButton";
import CategoryList from "../../components/home/CategoryList";

const AddOrEditScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const titleRef = useRef("");
  const descriptionRef = useRef("");
  const [date, setDate] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState("");
  console.log(selectedCategory)

  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const onCancel = useCallback(() => {
    navigation.goBack();
  }, []);

  const onConfirm = useCallback(() => {
    dispatch(
      todoAction.addTodo({
        date: date.toISOString(),
        title: titleRef.current,
        description: descriptionRef.current,
        category: selectedCategory,
      })
    );

    navigation.goBack();
  }, [titleRef.current, descriptionRef.current, date,selectedCategory]);

  const onSelectCategory = useCallback((a) => {
    setSelectedCategory(a);
  }, []);

  return (
    <Screen>
      <KeyboardAvoidingView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.contentContainer}>
            <TextInput
              placeholder="Title"
              style={styles.titleInp}
              onChangeText={(txt) => (titleRef.current = txt)}
            />

            <View style={styles.dateContainer}>
              <Text style={styles.date}>{formatDate(date)}</Text>
              <TouchableOpacity
                onPress={() => setDatePickerVisible(true)}
                style={styles.calenderIcon}
              >
                <AntDesign name="calendar" size={hp(2)} color="black" />
              </TouchableOpacity>
            </View>

            <TextInput
              placeholder="Description"
              multiline
              style={styles.descriptionInp}
              onChangeText={(txt) => (descriptionRef.current = txt)}
            />
            <View>
              <CategoryList
                activeCategory={selectedCategory}
                onCategoryHandler={onSelectCategory}
                forCreateAndEdit
              />
            </View>
          </View>
          <View style={styles.btnsContainer}>
            <View style={{ flex: 1 }}>
              <ActionButton onPress={onCancel} bgColor={"#fff"}>
                Cancel
              </ActionButton>
            </View>
            <View style={{ flex: 1.4 }}>
              <ActionButton onPress={onConfirm} bgColor={"#CFFF46"}>
                Add
              </ActionButton>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <DateTimePickerModal
        isVisible={datePickerVisible}
        mode="date"
        onConfirm={(a) => {
          setDate(new Date(a));
          setDatePickerVisible(false);
        }}
        onCancel={() => setDatePickerVisible(false)}
        date={date}
      />
    </Screen>
  );
};

export default AddOrEditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(4),
    marginTop: hp(5),
  },
  contentContainer: {
    height: hp(70),
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingHorizontal: wp(2),
    paddingVertical: hp(1),
  },
  btnsContainer: {
    flexDirection: "row",
    gap: wp(2),
    marginVertical: hp(4),
  },
  titleInp: {
    fontSize: hp(2.5),
    fontWeight: "500",
    color: "#000",
    paddingVertical: hp(1),
  },
  date: {
    opacity: 0.6,
    fontSize: hp(1.65),
  },
  descriptionInp: {
    fontSize: hp(2),
    flex: 1,
    textAlignVertical: "top",
    opacity: 0.7,
    paddingVertical: hp(1),
    marginBottom: hp(1.5),
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp(1),
    marginBottom: hp(2),
  },
  calenderIcon: {
    padding: hp(1),
  },
});
