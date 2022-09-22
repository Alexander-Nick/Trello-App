import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store, { persistProvider } from "./store/boardStore";
import { PersistGate } from "redux-persist/lib/integration/react";
import "./nullStyle.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistProvider().persister}>
        <App />
      </PersistGate>
    </Provider>
  </>
);
