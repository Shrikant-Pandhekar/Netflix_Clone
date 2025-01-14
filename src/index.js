import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import { GlobalStyle } from "./global_style";
import App from "./App";
import { firebase } from "./lib/firebase.prod";
import { FirebaseContext } from "./context/firebase";

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyle />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
