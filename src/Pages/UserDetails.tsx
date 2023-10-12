import React, { useState } from "react";
import {
  Progress,
  Box,
  Text,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Image,
  Select,
  Textarea,
  Checkbox,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  HStack,
  VStack,
} from "@chakra-ui/react";
import shoppingList from "../Assets/shoppingList.svg";
import mealPlans from "../Assets/mealPlans.svg";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const DietForm1 = () => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Customize your experience
      </Heading>
      <Flex>
        <FormControl mr="5%" isRequired>
          <FormLabel htmlFor="age" fontWeight={"normal"}>
            Age
          </FormLabel>
          <Input id="age" placeholder="Age" type="number" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="sex" fontWeight={"normal"}>
            Sex
          </FormLabel>
          <Select id="sex" placeholder="Select sex">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </Select>
        </FormControl>
      </Flex>
      <Flex mt="2%">
        <FormControl mr="5%">
          <FormLabel htmlFor="weight" fontWeight={"normal"}>
            Weight (kg)
          </FormLabel>
          <Input id="weight" placeholder="Weight" type="number" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="height" fontWeight={"normal"}>
            Height (cm)
          </FormLabel>
          <Input id="height" placeholder="Height" type="number" />
        </FormControl>
      </Flex>
    </>
  );
};

const DietForm2 = () => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Health and Activity
      </Heading>
      <FormControl>
        <FormLabel htmlFor="activity-level" fontWeight={"normal"}>
          Activity Level
        </FormLabel>
        <Select id="activity-level" placeholder="Select Activity Level">
          <option>Sedentary</option>
          <option>Lightly active</option>
          <option>Moderately active</option>
          <option>Very active</option>
          <option>Extra active</option>
        </Select>
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="health-history" fontWeight={"normal"}>
          Health History
        </FormLabel>
        <Textarea id="health-history" placeholder="Describe any past illnesses or surgeries" />
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="current-conditions" fontWeight={"normal"}>
          Current Health Conditions
        </FormLabel>
        <Textarea id="current-conditions" placeholder="e.g. Diabetes, Hypertension" />
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="medications" fontWeight={"normal"}>
          Medications
        </FormLabel>
        <Textarea id="medications" placeholder="List any medications you are currently taking" />
      </FormControl>
    </>
  );
};

const DietForm3 = () => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        Dietary Preferences and Restrictions
      </Heading>

      <FormControl mt="2%">
        <FormLabel htmlFor="dietary-preferences" fontWeight={"normal"}>
          Dietary Preferences
        </FormLabel>
        <Select id="dietary-preferences" placeholder="Select preference">
          <option>Vegetarian</option>
          <option>Vegan</option>
          <option>Halal</option>
          <option>Kosher</option>
          <option>None</option>
        </Select>
      </FormControl>

      <FormControl mt="2%">
        <FormLabel fontWeight={"normal"}>Dietary Restrictions</FormLabel>
        <Menu closeOnSelect={false}>
          <MenuButton as={Button}>Select Allergies</MenuButton>
          <MenuList minWidth="240px">
            <MenuItem>
              <Checkbox value="peanuts">Peanuts</Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox value="treeNuts">Tree nuts</Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox value="milk">Milk</Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox value="eggs">Eggs</Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox value="fish">Fish</Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox value="shellfish">Shellfish</Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox value="soy">Soy</Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox value="wheat">Wheat</Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox value="sesameSeeds">Sesame seeds</Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox value="mustard">Mustard</Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox value="sulfites">Sulfites</Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox value="lupin">Lupin</Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox value="mollusks">Mollusks</Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox value="celery">Celery</Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox value="gluten">Gluten</Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox value="kiwi">Kiwi</Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox value="strawberries">Strawberries</Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox value="citrusFruits">Citrus fruits</Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox value="maizeCorn">Maize/Corn</Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox value="caffeine">Caffeine</Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox value="msg">Monosodium Glutamate (MSG)</Checkbox>
            </MenuItem>
            <MenuItem>
              <Checkbox value="other">Other</Checkbox>
            </MenuItem>
          </MenuList>
        </Menu>
      </FormControl>
    </>
  );
};

const UserDetails = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w="full" minH="80vh" display="flex" justifyContent="center" alignItems="center" p="40px">
      <Box minW="50vw" borderWidth="1px" rounded="lg" shadow="1px 1px 3px rgba(0,0,0,0.3)" maxWidth={800} p={6} m="10px auto" as="form">
        <Progress colorScheme="orange" hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
        {step === 1 ? <DietForm1 /> : step === 2 ? <DietForm2 /> : <DietForm3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="orange"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="orange"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="blue"
                variant="solid"
                onClick={() => {
                  toast({
                    title: "Form submitted.",
                    description: "We've received your dietary preferences.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                  onOpen();
                }}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minW="80vw">
          <ModalHeader w="full" textAlign="center" fontSize="3xl" pt="30px" pb="40px">
            What would you like us to create for you?
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack w="full" justifyContent="space-evenly" p="20px">
              <Box
                w="400px"
                h="340px"
                borderRadius="14px"
                p="20px"
                shadow="rgba(0, 0, 0, 0.1) 0px 10px 50px"
                _hover={{
                  shadow: "rgba(0, 0, 0, 0.4) 0px 30px 90px",
                }}
                transition="all 0.2s ease-in-out"
                onClick={() => {
                  navigate("/shopping-list");
                }}
              >
                <VStack w="full">
                  <Text w="full" fontSize="xl" fontWeight="bold" textAlign="center" pb="40px">
                    Shopping List
                  </Text>
                  <Image h="200px" src={shoppingList} alt="shopping list" />
                </VStack>
              </Box>
              <Box
                w="400px"
                h="340px"
                borderRadius="14px"
                p="20px"
                shadow="rgba(0, 0, 0, 0.1) 0px 10px 50px"
                _hover={{
                  shadow: "rgba(0, 0, 0, 0.4) 0px 30px 90px",
                }}
                transition="all 0.2s ease-in-out"
                onClick={() => {
                  navigate("/meal-plan");
                }}
              >
                <VStack w="full">
                  <Text w="full" fontSize="xl" fontWeight="bold" textAlign="center" pb="40px">
                    Meal Plan
                  </Text>
                  <Image h="200px" src={mealPlans} alt="meal plans" />
                </VStack>
              </Box>
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="orange" mr={3} onClick={onClose}>
              Back
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default UserDetails;
