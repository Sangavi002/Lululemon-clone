import { Flex,Center,Image,Button } from "@chakra-ui/react";
import login from '../image/login.png';
import heart from '../image/heart.png';
import cart from '../image/cart.png';
import { useNavigate } from "react-router-dom";
import { Login } from "../Login";
export const Icons = () => {
    const navigate = useNavigate();

    return(
        <Flex mt='20px' pr='30px' >
            <Center>  
                <Button bg="white" onClick={() =>navigate('/Login')} _hover={{ bg:"white" }}><Image src={login} alt="login" w='100%' h='25px' ml="20px"/></Button>
            </Center>
            <Center>  
                <Image src={heart} alt="heart" w='100%' h='25px' mr="10px" ml="10px"/>
            </Center>
            <Center>  
            <Button bg="white" onClick={() =>navigate('/Login')} _hover={{ bg:"white" }} ><Image src={cart} alt="cart" w='100%' h='25px'  mr="10px"/></Button>
            </Center>
        </Flex>
    )
}