import { Box,Menu,MenuButton,MenuList,MenuGroup,MenuItem,MenuDivider,Button, Flex,Heading } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const MenDropDown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Menu isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <MenuButton
                    as={Heading}
                    size='xs'
                    letterSpacing={0.6}
                    onClick={handleMenuToggle}
                >
                    MEN
                </MenuButton>
            <MenuList zIndex="100">
                <Flex>
                <Box p="0 10px">
                    <MenuItem><Link to="/men">What's New</Link></MenuItem>
                    <MenuItem><Link to="/men">Bestsellers</Link></MenuItem>
                    <MenuItem><Link to="/men">ABC Collection</Link></MenuItem>
                    <MenuItem>Business casual clothes</MenuItem>
                    <MenuItem>Golf Clothes</MenuItem>
                    <MenuItem>Travel Clothes </MenuItem>
                    <MenuItem>Best Workout Gear</MenuItem>
                    <MenuItem>Pace Breaker Shop</MenuItem>
                    <MenuItem>Summer Clothes</MenuItem>
                    <MenuItem>We Made Too Much</MenuItem>
                </Box>
                <Box  p="0 10px">
                    <MenuGroup title='MEN"S CLOTHES '>
                        <MenuItem>Pants</MenuItem>
                        <MenuItem><Link to="/men">Button Down Shirts</Link></MenuItem>
                        <MenuItem><Link to="/men">Coats & Jackets</Link></MenuItem>
                        <MenuItem>Half Zip Sweetshirts </MenuItem>
                        <MenuItem>Hoodies & Sweatshirts</MenuItem>
                        <MenuItem>Joggers </MenuItem>
                        <MenuItem>Long Sleeves Shirts</MenuItem>
                        <MenuItem>polo Shirts</MenuItem>
                        <MenuItem>Shirts </MenuItem>
                    </MenuGroup>
                </Box>
                <Box  p="0 10px">
                    <MenuItem> </MenuItem>
                    <MenuItem>Shoes</MenuItem>
                    <MenuItem>Shorts </MenuItem>
                    <MenuItem>Socks</MenuItem>
                    <MenuItem>Sweaters</MenuItem>
                    <MenuItem>Swim Trunks</MenuItem>
                    <MenuItem>Tank Tops</MenuItem>
                    <MenuItem>Trousers</MenuItem>
                    <MenuItem>T-Shirts </MenuItem>
                    <MenuItem>Underwear</MenuItem>
                </Box>
                <Box  p="0 10px">
                    <MenuGroup title='ACCESSORIES '>
                        <MenuItem>Backpacks</MenuItem>
                        <MenuItem>bags </MenuItem>
                        <MenuItem>Belt Bags</MenuItem>
                        <MenuItem>Caps</MenuItem>
                        <MenuItem>crpssbody Bags</MenuItem>
                        <MenuItem>Duffle bags</MenuItem>
                        <MenuItem>Hats</MenuItem>
                        <MenuItem>Water Bottles</MenuItem>
                        <MenuItem>Yoga Mats </MenuItem>
                    </MenuGroup>
                </Box>
                </Flex>
            </MenuList>
        </Menu>
        </>
    )
}