import React from "react";
import { Box, Text } from "@chakra-ui/react";
import "./App.css";
import Hero from "./Components/Hero";
import Features from "./Components/Features";

function App() {
  return (
    <Box w="full" minH="90vh" p="40px" pt="0px" bgColor="#f7f1e3">
      <Box w="full" display="flex" justifyContent="center" pb="20px">
        <Text maxW="350px" fontFamily="'Dancing Script', cursive" fontSize="5rem" whiteSpace="nowrap" overflow="hidden" width="0" animation="writing 5s steps(100, end) forwards">
          Vibey Foods
        </Text>
      </Box>
      <Hero />
      <Box w="100%" display="center" justifyContent="center" pt="40px">
        <Features />
      </Box>
    </Box>
  );
}

export default App;
