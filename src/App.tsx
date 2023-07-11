import React from "react";
import "./App.scss";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store from "./app/store";
import { Store } from "redux";

function App(): JSX.Element {
  return (
    <Provider store={store as Store}>
      <AppRouter />
    </Provider>
  );
}

export default App;