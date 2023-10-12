import React from "react";
import { Box, Text, Image, VStack, Button } from "@chakra-ui/react";
import notFound from "../Assets/notFound.svg";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  const handleReturnHome = () => {
    navigate("/home");
  };

  return (
    <Box w="full" minH="100vh" display="flex" justifyContent="center" bgColor="#f7f1e3">
      <VStack p={{ base: "80px", lg: "80px" }}>
        <Image maxH="400px" src={notFound} alt="page not found" />
        <Text w="full" textAlign="center" pt="40px" fontSize="3xl" fontWeight="bold" fontFamily="dm-sans-serif">
          Page Not Found
        </Text>
        <Text w="full" textAlign="center">
          It looks like we couldn't find the page you are looking for.
        </Text>
        <Button mt="40px" fontFamily="md-sans-serrif" bgColor="gray.50" onClick={handleReturnHome}>
          Return Home
        </Button>
      </VStack>
    </Box>
  );
};

export default PageNotFound;
