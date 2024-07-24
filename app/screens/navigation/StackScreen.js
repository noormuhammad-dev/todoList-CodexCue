import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../todo/HomeScreen";
import AddOrEditScreen from "../todo/AddOrEditScreen";
import CategoryScreen from "../todo/CategoryScreen";
const Stack = createNativeStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="homeScreen" component={HomeScreen} />
      <Stack.Screen name="addOrEditScreen" component={AddOrEditScreen} />
      <Stack.Screen name="categoryScreen" component={CategoryScreen} />
    </Stack.Navigator>
  );
};

export default StackScreen;
