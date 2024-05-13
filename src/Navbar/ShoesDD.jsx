import { Box,Menu,MenuButton,MenuList,MenuGroup,MenuItem,MenuDivider,Button, Flex,Heading } from "@chakra-ui/react";
import { useState

 } from "react";
export const ShoesDD = () => {
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
                    SHOES
                </MenuButton>
            <MenuList >
                <Flex>
                <Box  p="0 10px">
                    <MenuGroup title='SHOES BY GENDER '>
                        <MenuItem>Women's Shoes</MenuItem>
                        <MenuItem>Men's Shoes </MenuItem>
                    </MenuGroup>
                </Box>
                <Box  p="0 10px">
                    <MenuGroup title='SHOE TYPES '>
                        <MenuItem>Cross Training Shoes</MenuItem>
                        <MenuItem>Running Shoes </MenuItem>
                        <MenuItem>Slides</MenuItem>
                        <MenuItem>Sneaker </MenuItem>
                        <MenuItem>Trail Running Shoes</MenuItem>
                        <MenuItem>Workout Shoes</MenuItem>
                    </MenuGroup>
                </Box>
                </Flex>
            </MenuList>
        </Menu>
        </>
    )
}