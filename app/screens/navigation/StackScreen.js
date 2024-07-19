import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../todo/HomeScreen";
import AddOrEditScreen from "../todo/AddOrEditScreen";
const Stack = createNativeStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="homeScreen" component={HomeScreen} />
      <Stack.Screen name="addOrEditScreen" component={AddOrEditScreen} />
    </Stack.Navigator>
  );
};

export default StackScreen;
