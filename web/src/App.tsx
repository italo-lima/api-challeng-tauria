import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Routes from "./routes";
import { PizzaProvider } from "./context";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <PizzaProvider>
        <Routes />
      </PizzaProvider>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
