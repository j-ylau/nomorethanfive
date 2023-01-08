import "./css/App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import React from "react";
import Home from "./Home";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;