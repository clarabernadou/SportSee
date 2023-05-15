import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataProvider } from './DataProvider';
import "./app.css"

import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
            <DataProvider>
              <Home />
            </DataProvider>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
