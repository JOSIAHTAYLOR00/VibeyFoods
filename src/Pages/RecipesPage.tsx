import { Box } from "@chakra-ui/react";
import React from "react";
import Recipes from "../Components/Recipes";

const RecipesPage = () => {
  return (
    <Box w="full" bgColor="#f7f1e3">
      <Recipes />
    </Box>
  );
};

export default RecipesPage;
