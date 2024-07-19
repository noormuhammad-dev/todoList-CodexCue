import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./app/store/store";

import StackScreen from "./app/screens/navigation/StackScreen";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
