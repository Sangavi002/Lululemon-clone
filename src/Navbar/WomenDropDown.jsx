import { useState } from "react";
import { Box, Menu, MenuButton, MenuList, MenuGroup, MenuItem, Button, Flex, Heading, border } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const WomenDropDown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Menu isOpen={isOpen} onClose={() => setIsOpen(false)} >
                <MenuButton
                    as={Heading}
                    size='xs'
                    letterSpacing={0.6}
                    onClick={handleMenuToggle}
                >
                    WOMEN
                </MenuButton>
            <MenuList zIndex="100">
                <Flex>
                    <Box  p="0 10px">
                        <MenuItem><Link to="/women">What's New</Link></MenuItem>
                        <MenuItem><Link to="/women">Bestsellers</Link></MenuItem>
                        <MenuItem><Link to="/women">Align Shop</Link></MenuItem>
                        <MenuItem>Travel Clothes</MenuItem>
                        <MenuItem>Matching Sets</MenuItem>
                        <MenuItem>Hotty Hot Shorts</MenuItem>
                        <MenuItem>Tennis and Golf Clothes</MenuItem>
                        <MenuItem>Summer Clothes</MenuItem>
                        <MenuItem>Plus Size Clothes</MenuItem>
                        <MenuItem>We Made Too Much</MenuItem>
                    </Box>
                    <Box  p="0 10px">
                        <MenuGroup title="WOMEN'S CLOTHES">
                            <MenuItem><Link to="/women">Leggings</Link></MenuItem>
                            <MenuItem><Link to="/women">Bodysuits</Link></MenuItem>
                            <MenuItem><Link to="/women">Coats & Jackets</Link></MenuItem>
                            <MenuItem><Link to="/women">Dresses</Link></MenuItem>
                            <MenuItem>Hoodies & Sweatshirts</MenuItem>
                            <MenuItem>Joggers</MenuItem>
                            <MenuItem>Jumpsuits & Rompers</MenuItem>
                            <MenuItem>Long Sleeve Shirts</MenuItem>
                            <MenuItem>Pants</MenuItem>
                        </MenuGroup>
                    </Box>
                    <Box  p="0 10px">
                        <MenuItem></MenuItem>
                        <MenuItem>Polo Shirts</MenuItem>
                        <MenuItem>Shirts</MenuItem>
                        <MenuItem>Shoes</MenuItem>
                        <MenuItem>Shorts</MenuItem>
                        <MenuItem>Skirts</MenuItem>
                        <MenuItem>Sports Bras</MenuItem>
                        <MenuItem>T-Shirts</MenuItem>
                        <MenuItem>Tank Tops</MenuItem>
                        <MenuItem>Underwear</MenuItem>
                    </Box>
                    <Box  p="0 10px">
                        <MenuGroup title="ACCESSORIES">
                            <MenuItem>Backpacks</MenuItem>
                            <MenuItem>Bags</MenuItem>
                            <MenuItem>Belt Bags</MenuItem>
                            <MenuItem>Crossbody Bags</MenuItem>
                            <MenuItem>Hair Accessories</MenuItem>
                            <MenuItem>Hats</MenuItem>
                            <MenuItem>Socks</MenuItem>
                            <MenuItem>Water Bottles</MenuItem>
                            <MenuItem>Yoga Mats</MenuItem>
                        </MenuGroup>
                    </Box>
                </Flex>
            </MenuList>
        </Menu>
    </>
    );
}
