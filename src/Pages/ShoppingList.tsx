import React from "react";
import { Box, Heading, Table, Button, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { HiOutlineShoppingCart } from "react-icons/hi";

const ShoppingList = () => {
  return (
    <Box w="full" minH="90vh" display="flex" justifyContent="center" p="40px">
      <Box w={{ base: "100%", lg: "50%" }} shadow="rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px" borderRadius="14px" p="20px">
        <Box w="full" borderBottom="2px solid black">
          <Heading fontFamily="dm-sans-serif">Today's Shopping List</Heading>
        </Box>
        <TableContainer pt="40px">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Item</Th>
                <Th>Count</Th>
                <Th>Purchase</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Organic Chicken Breast</Td>
                <Td isNumeric>2</Td>
                <Td>
                  <Button rightIcon={<HiOutlineShoppingCart />}>Purchase Item</Button>
                </Td>
              </Tr>
              <Tr>
                <Td>Organic Avacados</Td>
                <Td isNumeric>4</Td>
                <Td>
                  <Button rightIcon={<HiOutlineShoppingCart />}>Purchase Item</Button>
                </Td>
              </Tr>
              <Tr>
                <Td>Organic Quinoa</Td>
                <Td isNumeric>3</Td>
                <Td>
                  <Button rightIcon={<HiOutlineShoppingCart />}>Purchase Item</Button>
                </Td>
              </Tr>
              <Tr>
                <Td>Cage Free Eggs</Td>
                <Td isNumeric>1</Td>
                <Td>
                  <Button rightIcon={<HiOutlineShoppingCart />}>Purchase Item</Button>
                </Td>
              </Tr>
              <Tr>
                <Td>Virgin Olive Oil</Td>
                <Td isNumeric>1</Td>
                <Td>
                  <Button rightIcon={<HiOutlineShoppingCart />}>Purchase Item</Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default ShoppingList;
