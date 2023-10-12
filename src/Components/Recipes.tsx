import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";

export default function Simple() {
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid columns={1} spacing={8} py={18}>
        <Flex>
          <Image
            rounded={"md"}
            alt={"recipe image"}
            src={
              "https://people.com/thmb/FuphaVojr0vzvu5gbDuxvar2qkM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/purple-carrot-buffalo-tempeh-quinoa-bowl-roasted-peppers-dill-sour-cream-8549bec1976a46fd8b6cd77fa82c68cd.jpg"
            }
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={6}>
          <Box as={"header"}>
            <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }} fontFamily="dm-sans-serif">
              Quinoa Chicken Bowl
            </Heading>
            <Text color={useColorModeValue("gray.900", "gray.400")} fontWeight={300} fontSize={"2xl"}>
              $12.00 USD
            </Text>
          </Box>

          <Stack spacing={4} direction={"column"} divider={<StackDivider borderColor={useColorModeValue("gray.200", "gray.600")} />}>
            <VStack spacing={4}>
              <Text w="full" color={useColorModeValue("gray.500", "gray.400")} fontSize={"2xl"} fontWeight={"300"}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              </Text>
              <Text fontSize={"lg"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis porro, quae,
                quisquam quos reprehenderit velit? Natus, totam.
              </Text>
            </VStack>
            <Box>
              <Text fontSize={{ base: "16px", lg: "18px" }} color={useColorModeValue("yellow.500", "yellow.300")} fontWeight={"500"} textTransform={"uppercase"} mb={"4"}>
                Ingredients
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>1 cup quinoa (rinsed and drained)</ListItem>
                  <ListItem>2 cups water or chicken broth</ListItem> <ListItem>2 boneless, skinless chicken breasts</ListItem>
                  <ListItem>1 tablespoon olive oil</ListItem>
                  <ListItem>Salt and pepper, to taste</ListItem>
                  <ListItem>1 cup cherry tomatoes, halved</ListItem>
                  <ListItem>1 avocado, sliced</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>1/2 cup corn kernels (can be fresh, frozen, or roasted)</ListItem>
                  <ListItem>1/2 cup black beans, rinsed and drained</ListItem>
                  <ListItem>1/4 cup red onion, finely chopped</ListItem>
                  <ListItem>1/4 cup fresh cilantro, chopped</ListItem>
                  <ListItem>Juice of 1 lime</ListItem>
                  <ListItem>Optional toppings: feta cheese, sour cream, salsa, etc.</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text fontSize={{ base: "16px", lg: "18px" }} color={useColorModeValue("yellow.500", "yellow.300")} fontWeight={"500"} textTransform={"uppercase"} mb={"4"}>
                Step by Step
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Cook Quinoa:
                  </Text>{" "}
                  {`In a medium saucepan, bring the 2 cups of water or chicken broth to a boil. \n
                  Add the quinoa, reduce heat to low, cover, and cook for 15 minutes or until the quinoa is tender and the water is absorbed. Remove from heat and fluff with a fork.`}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Prepare Chicken:
                  </Text>{" "}
                  Season chicken breasts with salt and pepper. In a skillet over medium heat, add olive oil. Once hot, add the chicken breasts. Cook for 6-7 minutes on each side or
                  until fully cooked through and no longer pink in the center. Remove from heat and let it rest for a few minutes. Then, slice or dice the chicken into bite-sized
                  pieces.
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Assemble the Bowl:
                  </Text>{" "}
                  In a large bowl, combine the cooked quinoa, chicken, cherry tomatoes, avocado slices, corn, black beans, and red onion. Drizzle with lime juice and toss to
                  combine. Garnish with fresh cilantro and any optional toppings of your choice.
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Serve:
                  </Text>{" "}
                  Divide the mixture among bowls and serve immediately. You can also drizzle with a dressing of your choice or add a dollop of sour cream or salsa for extra flavor.
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
