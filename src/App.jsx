import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import RootLayout from "./layout/RootLayout";

function App() {
  return (
    <>
      <RootLayout>
        <Home />
      </RootLayout>
    </>
  );
}

export default App;
