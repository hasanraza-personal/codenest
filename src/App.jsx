import { Container, Divider } from "@chakra-ui/react";
import React from "react";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import AdvanceC from "./pages/adnance_c/AdvanceC";

const App = () => {
  return (
    <>
      <Container maxW="container.sm" shadow="xs">
        <Header />
        <Divider mb="6px" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/advancec" element={<AdvanceC />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
