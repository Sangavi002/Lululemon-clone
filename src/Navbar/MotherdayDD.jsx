import { Box,Menu,MenuButton,MenuList,MenuGroup,MenuItem,MenuDivider,Button, Flex,Heading} from "@chakra-ui/react";
import { useState

 } from "react";
export const MotherdayDD = () => {
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
                    MOTHER"S DAY
                </MenuButton>
            <MenuList >
                <Flex>
                <Box  p="0 10px">
                    <MenuGroup title='MOTHER"S DAY GIFTS'>
                        <MenuItem>Our Best Gifts</MenuItem>
                        <MenuItem>Accessories </MenuItem>
                        <MenuItem>Under $50</MenuItem>
                        <MenuItem>Under $100 </MenuItem>
                        <MenuItem>Shoes</MenuItem>
                    </MenuGroup>
                </Box>
                </Flex>
            </MenuList>
        </Menu>
        </>
    )
}