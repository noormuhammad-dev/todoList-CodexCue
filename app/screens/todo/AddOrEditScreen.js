import { useCallback } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Screen from "./Screen";
import ActionButton from "../../components/addOrEdit/ActionButton";

const AddOrEditScreen = ({ navigation }) => {
  const onCancel = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <Screen>
      <KeyboardAvoidingView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.contentContainer}>
            <TextInput placeholder="Title" style={styles.titleInp} />
            <Text style={styles.date}>date</Text>
            <TextInput
              placeholder="Description"
              multiline
              style={styles.descriptionInp}
            />
          </View>
          <View style={styles.btnsContainer}>
            <View style={{ flex: 1 }}>
              <ActionButton onPress={onCancel} bgColor={"#fff"}>
                Cancel
              </ActionButton>
            </View>
            <View style={{ flex: 1.4 }}>
              <ActionButton bgColor={"#CFFF46"}>Add</ActionButton>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
    paddingVertical:hp(1)
  },
  date: {
    opacity: 0.6,
    fontSize: hp(1.65),
    marginTop:hp(.5),
    marginBottom:hp(2)
  },
  descriptionInp: {
    fontSize: hp(2),
    flex: 1,
    textAlignVertical: "top",
    opacity: 0.7,
    paddingVertical:hp(1)
  },
});
