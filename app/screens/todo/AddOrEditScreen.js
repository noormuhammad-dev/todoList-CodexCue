import { useCallback, useState } from "react";
import {
  Alert,
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
import DeleteButton from "../../components/addOrEdit/DeleteButton";

const AddOrEditScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const editableData = route.params?.editableData;

  const [data, setData] = useState({
    title: editableData ? editableData.title : "",
    description: editableData ? editableData.description : "",
    date: editableData ? new Date(editableData.date) : new Date(),
    selectedCategory: editableData ? editableData.category : "",
  });

  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const onCancel = useCallback(() => {
    navigation.goBack();
  }, []);

  const onConfirm = useCallback(() => {
    if (
      data.title.trim().length == 0 ||
      data.description.trim().length == 0 ||
      !data.selectedCategory
    ) {
      Alert.alert(
        "Validation Error",
        "Please provide a title, description, and select a category."
      );
      return;
    }

    if (editableData) {
      dispatch(
        todoAction.editTodo({
          id: editableData.id,
          data: {
            date: data.date.toISOString(),
            title: data.title.trim(),
            description: data.description.trim(),
            category: data.selectedCategory,
          },
        })
      );
    } else {
      dispatch(
        todoAction.addTodo({
          date: data.date.toISOString(),
          title: data.title.trim(),
          description: data.description.trim(),
          category: data.selectedCategory,
        })
      );
    }

    navigation.goBack();
  }, [data]);

  const onSelectCategory = useCallback((a) => {
    setData((pre) => {
      return {
        ...pre,
        selectedCategory: a,
      };
    });
  }, []);

  const onInputTextChange = (name, txt) => {
    setData((pre) => {
      return {
        ...pre,
        [name]: txt,
      };
    });
  };

  return (
    <Screen>
      <KeyboardAvoidingView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.contentContainer}>
            <TextInput
              placeholder="Title"
              style={styles.titleInp}
              value={data.title}
              onChangeText={(txt) => onInputTextChange("title", txt)}
            />

            <View style={styles.dateContainer}>
              <Text style={styles.date}>{formatDate(data.date)}</Text>
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
              onChangeText={(txt) => onInputTextChange("description", txt)}
              value={data.description}
            />
            <View>
              <CategoryList
                activeCategory={data.selectedCategory}
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
                {editableData ? "Edit" : " Add"}
              </ActionButton>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <DateTimePickerModal
        isVisible={datePickerVisible}
        mode="date"
        onConfirm={(a) => {
          setData((pre) => {
            return {
              ...pre,
              date: new Date(a),
            };
          });
          setDatePickerVisible(false);
        }}
        onCancel={() => setDatePickerVisible(false)}
        date={data.date}
      />
      {editableData && <DeleteButton id={editableData.id} />}
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
