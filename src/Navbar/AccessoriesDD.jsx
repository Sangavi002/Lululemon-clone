import { Box,Menu,MenuButton,MenuList,MenuGroup,MenuItem,MenuDivider,Button, Flex,Heading } from "@chakra-ui/react";
import { useState } from "react";

export const AccessoriesDD = () => {
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
                    ACCESSORIES
                </MenuButton>
                <MenuList >
                    <Flex>
                        <Box  p="0 10px">
                            <MenuItem>What's New</MenuItem>
                            <MenuItem>Bestsellers </MenuItem>
                            <MenuItem>Mini Bags</MenuItem>
                            <MenuItem>Running Accessories</MenuItem>
                            <MenuItem>Pink Accessories</MenuItem>
                            <MenuItem>Everywher Bag Shop</MenuItem>
                            <MenuItem>Travel Accessories</MenuItem>
                            <MenuItem>Summer Accessories </MenuItem>
                            <MenuItem>We Made Too Much</MenuItem>
                        </Box>
                        <Box  p="0 10px">
                            <MenuGroup title='ACCESSORIES '>
                                <MenuItem>Bags</MenuItem>
                                <MenuItem>Bucket Hats</MenuItem>
                                <MenuItem>Caps</MenuItem>
                                <MenuItem>Equipment </MenuItem>
                                <MenuItem>Gloves & Mittens</MenuItem>
                                <MenuItem>Hair Accessories </MenuItem>
                                <MenuItem>Hats</MenuItem>
                            </MenuGroup>
                        </Box>
                        <Box  p="0 10px">
                            <MenuItem> </MenuItem>
                            <MenuItem>Headbands</MenuItem>
                            <MenuItem>Keychains </MenuItem>
                            <MenuItem>Men's Socks</MenuItem>
                            <MenuItem>Scarves & Wraps</MenuItem>
                            <MenuItem>Water Bottles</MenuItem>
                            <MenuItem>Women's Socks </MenuItem>
                            <MenuItem>Yoga Mats</MenuItem>
                        </Box>
                        <Box  p="0 10px">
                            <MenuGroup title='BAGS '>
                                <MenuItem>Backpacks</MenuItem>
                                <MenuItem>Belts Bags </MenuItem>
                                <MenuItem>Crossbody Bags </MenuItem>
                                <MenuItem>Duffle Bags</MenuItem>
                                <MenuItem>Totes</MenuItem>
                                <MenuItem>Wallets & Pouches</MenuItem>
                            </MenuGroup>
                        </Box>
                    </Flex>
                </MenuList>
            </Menu>
        </>
    )
};