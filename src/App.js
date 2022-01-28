import React from "react";
import { Header } from "./components/Header/Header";
import { useRouter } from "./hooks/router";
import { MainPage } from "./pages/MainPage/MainPage";

function App() {
  return useRouter();
}

export default App;
