import { Box, Flex, Avatar, HStack, IconButton, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useDisclosure, useColorModeValue, Stack, Image } from "@chakra-ui/react";
import LogoCandidate from "../Assets/VibeyFoodsLogo.png";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

interface NavLinkProps {
  children: React.ReactNode;
  link: { name: string; route: string };
}

interface Props {
  children: React.ReactNode;
}

const Links = [
  { name: "Home", route: "home" },
  { name: "Meal Plans", route: "meal-plans" },
  { name: "Popular Recipes", route: "popular-recipes" },
  { name: "Community", route: "community" },
  { name: "Our Story", route: "our-story" },
];

const NavLink = (props: NavLinkProps) => {
  const { children, link } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={link.route}
    >
      {children}
    </Box>
  );
};

export default function Simple(props: Props) {
  const { children } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.50", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton size={"md"} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={"Open Menu"} display={{ md: "none" }} onClick={isOpen ? onClose : onOpen} />
          <HStack spacing={8} alignItems={"center"}>
            <Image src={LogoCandidate} h="60px" borderRadius="12px" />
            <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
              {Links.map((link) => (
                <NavLink key={link.name} link={link}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
                <Avatar
                  size={"sm"}
                  src={"https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"}
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} link={link}>
                  {link.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Box minW="100vw" minH="100vh" bgColor="#f7f1e3">
        {children}
      </Box>
    </>
  );
}
