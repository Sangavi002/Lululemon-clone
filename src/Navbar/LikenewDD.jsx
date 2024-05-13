import { Box,Menu,MenuButton,MenuList,MenuGroup,MenuItem,MenuDivider,Button, Flex ,Heading} from "@chakra-ui/react";
import { useState

 } from "react";
export const LikenewDD = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <Menu isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <MenuButton 
                as={Heading} 
                size='xs'
                letterSpacing={.6}
                onMouseEnter={() => setIsOpen(true)} 
                onMouseLeave={() => setIsOpen(false)}
            >
                LIKE NEW
            </MenuButton>
        </Menu>
        </>
    )
}