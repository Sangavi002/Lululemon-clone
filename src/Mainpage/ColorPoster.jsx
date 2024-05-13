import { Box,Heading,Flex,Image,Button,Center} from "@chakra-ui/react";
import pink from '../Mainpage/WomenSlider/pink.webp';
import blue from '../Mainpage/WomenSlider/blue.webp';
import green from '../Mainpage/WomenSlider/green.webp';
import men from '../Mainpage/WomenSlider/men.webp';

export const ColorPoster = () => {
    return(
        <>
        <Box p="30px" mt="20px">
            <Flex gap="25px">
                <Box  w="33.33%"  h="550px" >
                    <Box >
                        <Image src={pink} alt="pink" h="450px" w="100%"/>
                    </Box>
                    <Heading size="lg" mt="20px" lineHeight="35px" fontSize="24px">A shade to move you, pinky swear.</Heading>
                    <Button mt="20px" border="1px solid black" bg="white" letterSpacing="0.8px" p="25px 20px" fontWeight="700" _hover={{ bg: "black", color: "white" }}>SHOP PINK</Button>
                </Box>
                <Box w="33.33%" h="550px" >
                    <Box >
                        <Image src={blue} alt="blue"  h="450px" w="100%"/>
                    </Box>
                    <Heading size="md" mt="20px" lineHeight="35px" fontSize="24px">That sky’s the limit feeling.</Heading>
                    <Button mt="20px" border="1px solid black" bg="white" letterSpacing="0.8px" p="25px 20px" fontWeight="700" _hover={{ bg: "black", color: "white" }}>SHOP BLUE</Button>
                </Box>
                <Box w="33.33%" h="550px"  >
                    <Box >
                        <Image src={green} alt="green"  h="450px" w="100%"/>
                    </Box>
                    <Heading size="md" mt="20px" lineHeight="35px" fontSize="24px">Shades of newfound energy.</Heading>
                    <Button mt="20px" border="1px solid black" bg="white" letterSpacing="0.8px" p="25px 20px" fontWeight="700" _hover={{ bg: "black", color: "white" }}>SHOP GREEN</Button>
                </Box>
            </Flex>
        </Box>
        <Box  p="30px" mt="70px">
            <Image src={men} alt="men" />
            <Heading size="lg" mt="20px">Shirts with a competitive edge.</Heading>
            <Heading size="sm" mt="10px" fontWeight="500" lineHeight="25px">The Evolution Short-Sleeve Polo Shirt uses quick-drying technology to an advantage.</Heading>
            <Button mt="20px" border="1px solid black" bg="white" letterSpacing="0.8px" p="25px 20px" fontWeight="700" _hover={{ bg: "black", color: "white" }}>SHOP POLO SHIRTS</Button>   
        </Box>
        <Box p="30px" bg="black" h="320px" mb="30px">
            <Center>
            <Box bg="white" h="240px" mt="10px"  w="50%" textAlign="center">
                <Heading size="md" mt="15%">Shopping made seamless.</Heading>
                <Heading size="sm"mt="7px" fontWeight="400">Free shipping. Free returns.</Heading>
            </Box>
            </Center>
        </Box>
        </>
    )
}