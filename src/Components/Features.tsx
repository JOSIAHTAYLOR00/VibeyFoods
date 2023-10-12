import { ReactElement } from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex w={16} h={16} align={"center"} justify={"center"} color={"white"} rounded={"full"} bg={"gray.100"} mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4} maxW={"7xl"}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={"Fill Out Details"}
          text={"Enter your personal health information to get tailored results just for you. This data will only be used to make sure we are generating the right meals for you."}
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={"Search For Foods"}
          text={"Search for your favorite foods and find a healthier alternative in seconds. Enter your favorite meal, and receive a custom meal plan tailored to your needs."}
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={"Get Your Shopping List"}
          text={"Once you have found the meal that you want, we will provide you with a shopping list. Then you can purchase all of the ingredients right where you are!"}
        />
      </SimpleGrid>
    </Box>
  );
}
