import { Box, Grid, GridItem, Image, Flex, Heading, Text, Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { ChevronDownIcon } from "@chakra-ui/icons";
import { fetchdress } from "../Redux/action/womenDress";
import { sortdressAsc,sortdressDesc } from "../Redux/action/womenDress";
import { WCategory } from "./WCategory";

export const WomenDress = () => {
    const dispatch = useDispatch();
  const womenDress = useSelector(state => state.women);

  const handleSortAsc = () => {
    dispatch(sortdressAsc());
  };

  const handleSortDesc = () => {
    dispatch(sortdressDesc());
  };

  useEffect(() => {
    dispatch(fetchdress());
  }, []); 

    return (
        <>
            <Box>
                <Flex>
                    <WCategory />
                    <Box p="30px">
                <Flex justifyContent="end">
                    <Menu>
                        <MenuButton as={Button} bg="white" rightIcon={<ChevronDownIcon />} _hover={{ bg: "transparent" }}>
                            Sort by Price
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={handleSortDesc}>Price: High to Low</MenuItem>
                            <MenuItem onClick={handleSortAsc}>Price: Low to High</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
                <Box borderTop="1px solid #e5e6e7" mt="10px"></Box>
                <Grid templateColumns="repeat(3, 1fr)" gap={10} mt="20px">
                    {womenDress.dress.map((ele, index) => (
                        <Link key={ele.id} to={`/women/${ele.id}`} className='card-link'>
                            <GridItem key={index}>
                                <Box h="360px">
                                    <Image src={ele.image} alt={ele.title} h="300px" w="100%" />
                                    <Flex justify="space-between" mt="2">
                                        <Heading size="sm" lineHeight="25px" fontWeight="600">{ele.title}</Heading>
                                        <Text fontWeight="600">${ele.price}</Text>
                                    </Flex>
                                </Box>
                            </GridItem>
                        </Link>
                    ))}
                </Grid>
            </Box>
                </Flex>
            </Box>
        </>
    );
};