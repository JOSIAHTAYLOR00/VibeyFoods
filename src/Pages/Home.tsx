import React from "react";
import { Box, VStack, HStack, Text, Heading, Image, Button, Icon, useColorModeValue, createIcon } from "@chakra-ui/react";
import list from "../Assets/list.svg";
import search from "../Assets/search.svg";
import meal from "../Assets/meal.svg";
import { useNavigate } from "react-router-dom";
import stockMeal from "../Assets/stockMeal2.jpg";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box w="full" minH="90vh" display="flex" justifyContent="center" bgColor="#f7f1e3">
      <VStack w="full">
        <VStack w="full" display="flex" justifyContent="center" gap="20" p="20px" pt="20px">
          <Box
            w="90vw"
            h="50vh"
            overflowX="hidden"
            overflowY="hidden"
            bgSize="100% auto"
            bgImage={`linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${stockMeal})`}
            bgPosition="center"
            bgRepeat="no-repeat"
            borderRadius="24px"
            display="flex"
            justifyContent="center"
            pt="6%"
          >
            <VStack textAlign="left">
              <Heading color="white" fontSize={{ base: "xl", lg: "90px" }} fontFamily="dm-sans-serrif" textShadow="0px 0px 32px rgba(0,0,0,0.9)">
                Vibey Foods
              </Heading>
              <VStack pt="40px" position="relative">
                <Heading w="full" color="white" fontSize="xl" fontFamily="dm-sans-serrif" textShadow="0px 0px 32px rgba(0,0,0,0.9)">
                  It's Time To Take Your Health
                </Heading>
                <Heading w="full" textAlign="center" color="white" fontSize="xl" fontFamily="dm-sans-serrif" textShadow="0px 0px 32px rgba(0,0,0,0.9)">
                  Seriously
                </Heading>
                <Button colorScheme="orange" w={{ base: "120px", lg: "200px" }} h={{ base: "40px", lg: "60px" }} fontSize={{ base: "14px", lg: "20px" }} mt="40px">
                  Get Started
                </Button>
                <Box>
                  <Icon
                    as={Arrow}
                    textShadow="0px 0px 32px rgba(0,0,0,0.9)"
                    color={useColorModeValue("gray.800", "gray.300")}
                    w={71}
                    position={"absolute"}
                    right={-10}
                    top={"160px"}
                  />
                  <Text
                    color="white"
                    zIndex={10}
                    fontSize={"lg"}
                    fontFamily={"Caveat"}
                    position={"absolute"}
                    right={"-100px"}
                    top={"130px"}
                    transform={"rotate(10deg)"}
                    textShadow="0px 0px 32px rgba(0,0,0,0.9)"
                  >
                    Free Meal Plan
                  </Text>
                </Box>
              </VStack>
            </VStack>
          </Box>
          {/* <Box w="80vw" h="40vh" overflowY="hidden" overflowX="hidden" borderRadius="24px">
            <Image w="full" src={stockMeal} alt="meal" borderRadius="24px" />
          </Box> */}
          {/* <HStack w="full" justifyContent="space-evenly" pb="80px">
            <Box
              bgColor="gray.50"
              shadow="rgba(0, 0, 0, 0.1) 0px 10px 50px"
              borderRadius="14px"
              p="20px"
              display="flex"
              justifyContent="center"
              _hover={{
                shadow: "rgba(0, 0, 0, 0.4) 0px 30px 90px",
              }}
              cursor="pointer"
              onClick={() => navigate("/food-search")}
            >
              <Image src={search} alt="shopping-list" h="260px" />
            </Box>
            <Box
              bgColor="gray.50"
              shadow="rgba(0, 0, 0, 0.1) 0px 10px 50px"
              borderRadius="14px"
              p="20px"
              display="flex"
              justifyContent="center"
              _hover={{
                shadow: "rgba(0, 0, 0, 0.4) 0px 30px 90px",
              }}
              cursor="pointer"
              onClick={() => navigate("/shopping-list")}
            >
              <Image src={list} alt="shopping-list" h="260px" />
            </Box>
            <Box
              bgColor="gray.50"
              shadow="rgba(0, 0, 0, 0.1) 0px 10px 50px"
              borderRadius="14px"
              p="20px"
              display="flex"
              justifyContent="center"
              _hover={{
                shadow: "rgba(0, 0, 0, 0.4) 0px 30px 90px",
              }}
              cursor="pointer"
              onClick={() => navigate("/meal-plans")}
            >
              <Image src={meal} alt="shopping-list" h="260px" />
            </Box>
          </HStack> */}
          <HStack w="full" justifyContent="space-around" flexWrap="wrap">
            <Box w={{ base: "full", lg: "24vw" }} h="280px">
              <Box
                bgColor="gray.50"
                shadow="rgba(0, 0, 0, 0.1) 0px 10px 50px"
                borderRadius="14px"
                p="20px"
                display="flex"
                justifyContent="center"
                _hover={{
                  shadow: "rgba(0, 0, 0, 0.4) 0px 30px 90px",
                }}
                cursor="pointer"
                onClick={() => navigate("/food-search")}
              >
                <Image src={search} alt="shopping-list" h="260px" />
              </Box>
            </Box>
            <Box w={{ base: "full", lg: "34vw" }} pt={{ base: "30px", lg: "0px" }}>
              <Heading size="md">Find the healthy brands.</Heading>
              <Text>
                This tool allows you to generate a meal-based shopping list with just one simple search. Describe the types of food you want and a customizable shopping list with
                all the ingredients you need will be generated on the fly! All the ingredients will be tailored to your specific wants and needs and will be generated useing an
                algorithm that calculates the best nutritional balance for you.{" "}
              </Text>
            </Box>
          </HStack>
          <HStack w="full" justifyContent="space-around" flexWrap="wrap">
            <Box w={{ base: "full", lg: "24vw" }} h="280px">
              <Box
                bgColor="gray.50"
                shadow="rgba(0, 0, 0, 0.1) 0px 10px 50px"
                borderRadius="14px"
                p="20px"
                display="flex"
                justifyContent="center"
                _hover={{
                  shadow: "rgba(0, 0, 0, 0.4) 0px 30px 90px",
                }}
                cursor="pointer"
                onClick={() => navigate("/shopping-list")}
              >
                <Image src={list} alt="shopping-list" h="260px" />
              </Box>
            </Box>
            <Box w={{ base: "full", lg: "34vw" }} pt={{ base: "30px", lg: "0px" }}>
              <Heading size="md">Generate Shopping Lists.</Heading>
              <Text>
                Generate a meal-based shopping list with just one simple search. Describe the types of food you want and a customizable shopping list with all the ingredients you
                need will be generated on the fly! All the ingredients will be tailored to your specific wants and needs and will be generated useing an algorithm that calculates
                the best nutritional balance for you.{" "}
              </Text>
            </Box>
          </HStack>
          <HStack w="full" justifyContent="space-around" flexWrap="wrap" pb="120px">
            <Box w={{ base: "full", lg: "24vw" }} h="280px">
              <Box
                bgColor="gray.50"
                shadow="rgba(0, 0, 0, 0.1) 0px 10px 50px"
                borderRadius="14px"
                p="20px"
                display="flex"
                justifyContent="center"
                _hover={{
                  shadow: "rgba(0, 0, 0, 0.4) 0px 30px 90px",
                }}
                cursor="pointer"
                onClick={() => navigate("/meal-plans")}
              >
                <Image src={meal} alt="shopping-list" h="260px" />
              </Box>
            </Box>
            <Box w={{ base: "full", lg: "34vw" }} pt={{ base: "30px", lg: "0px" }}>
              <Heading size="md">Build meal plans.</Heading>
              <Text>
                This tool allows you to generate a meal-based shopping list with just one simple search. Describe the types of food you want and a customizable shopping list with
                all the ingredients you need will be generated on the fly! All the ingredients will be tailored to your specific wants and needs and will be generated useing an
                algorithm that calculates the best nutritional balance for you.{" "}
              </Text>
            </Box>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Home;

const Arrow = createIcon({
  displayName: "Arrow",
  viewBox: "0 0 72 24",
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="white"
    />
  ),
});
