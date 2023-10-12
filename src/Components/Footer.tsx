import { Box, chakra, Container, SimpleGrid, Stack, Text, VisuallyHidden, Input, IconButton, useColorModeValue, Image, HStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import vfLogo from "../Assets/VibeyFoodsLogo.png";

const SocialButton = ({ children, label, href }: { children: ReactNode; label: string; href: string }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  // const [customerEmail, setCustomerEmail] = useState<string>();

  // const handleChange = (e: { target: { value: SetStateAction<string | undefined> } }) => {
  //   setCustomerEmail(e.target.value);
  // };
  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")} color={useColorModeValue("gray.700", "gray.200")}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }} spacing={8}>
          <Stack spacing={6}>
            <HStack>
              <Image h="60px" src={vfLogo} />
              <Box>
                <Text fontWeight="bold">Vibey Foods LLC.</Text>
              </Box>
            </HStack>
            <Text fontSize={"sm"}>© 2023 Vibey Foods. All rights reserved</Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={"/our-story"}>
              About us
            </Box>
            <Box as="a" href={"/community"}>
              Blog
            </Box>
            <Box as="a" href={"/contact-us"}>
              Contact us
            </Box>
            <Box as="a" href={"/pricing"}>
              Pricing
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Box as="a" href={"/help-center"}>
              Help Center
            </Box>
            <Box as="a" href={"/terms-of-service"}>
              Terms of Service
            </Box>
            <Box as="a" href={"/privacy-policy"}>
              Privacy Policy
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
                // onChange={handleChange}
              />
              <IconButton
                bg={useColorModeValue("orange.400", "orange.800")}
                color={useColorModeValue("white", "gray.800")}
                _hover={{
                  bg: "orange.600",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
