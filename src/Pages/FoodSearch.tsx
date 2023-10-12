import React from "react";
import { Box, Heading, Text, VStack, Input } from "@chakra-ui/react";

const FoodSearch = () => {
  return (
    <Box w="full" minH="90vh">
      <VStack w="full">
        <Text
          maxW="350px"
          pb="80px"
          fontFamily="'Dancing Script', cursive"
          fontSize="5rem"
          whiteSpace="nowrap"
          overflow="hidden"
          width="0"
          animation="writing 5s steps(100, end) forwards"
        >
          Vibey Foods
        </Text>
        <Heading fontFamily="dm-sans-serrif">Search for your favorite food</Heading>
        <Text>
          Get started by entering the name of your favorite food. You can include the name of the brand of food if you would like to discover more information on that specific
          food.
        </Text>
        <Box w={{ base: "100%", lg: "26vw" }}>
          <Input type="text" border="2px solid orange" />
        </Box>
      </VStack>
    </Box>
  );
};

export default FoodSearch;
