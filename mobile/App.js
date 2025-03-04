import React from "react";
import { Provider } from "react-redux";
import AppNavigator from "./src/navigator/AppNavigator.js";
import store from "./src/redux/store.js";

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;