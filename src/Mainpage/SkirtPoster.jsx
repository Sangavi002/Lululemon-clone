import { Box,Heading,Flex, Center,Image,Button} from "@chakra-ui/react";
import Skirt1 from "../Mainpage/ShortSlider/Skirt1.webp";
import skirt2 from "../Mainpage/ShortSlider/skirt2.webp";
import mom from "../Mainpage/ShortSlider/mom.webp";

export const SkirtPoster = () => {
    return(
        <>
        <Box p="30px" mt="20px">
            <Flex gap="30px">
                <Box h="800px" w="50%" >
                    <Box h="600px">
                        <Image src={Skirt1} alt="skirt1" h="600px" w="100%"/>
                    </Box>
                    <Heading size="lg" mt="20px">Feels like freedom.</Heading>
                    <Heading size="sm" mt="10px" fontWeight="500" lineHeight="25px">Whether you’re exploring the sights or relaxing at night, the Softstreme™ High-Rise Midi Skirt dials up the softness.</Heading>
                    <Button mt="20px" border="1px solid black" bg="white" letterSpacing="0.8px" p="25px 20px" fontWeight="700" _hover={{ bg: "black", color: "white" }}>SHOP CASUAL SKIRTS</Button>
                </Box>
                <Box h="800px" w="50%">
                    <Box h="600px">
                        <Image src={skirt2} alt="skirt2"  h="600px" w="100%"/>
                    </Box>
                    <Heading size="lg" mt="20px">The team to pleat.</Heading>
                    <Heading size="sm" mt="10px" fontWeight="500" lineHeight="25px">A dynamic duo of featherlight fabric and sweat-wicking liner—these pleated skirts have the heat beat.</Heading>
                    <Button mt="20px" border="1px solid black" bg="white" letterSpacing="0.8px" p="25px 20px" fontWeight="700" _hover={{ bg: "black", color: "white" }}>SHOP TENNIS SKIRTS</Button>
                </Box>
            </Flex>
        </Box>
        <Box  p="30px">
            <Image src={mom} alt="mom" />
            <Heading size="lg" mt="20px">Mom knows best.</Heading>
            <Heading size="sm" mt="10px" fontWeight="500" lineHeight="25px">Buy mom-recommended gifts online, pick them up in-store in two hours. And exhale.</Heading>
            <Button mt="20px" border="1px solid black" bg="black" letterSpacing="0.8px" p="25px 20px" fontWeight="700" mr="10px" color="white">SHOP MOTHER'S DAY GIFTS</Button>
            <Button mt="20px" border="1px solid black" bg="white" letterSpacing="0.8px" p="25px 20px" fontWeight="700" _hover={{ bg: "black", color: "white" }}>SEND AN ECARD GIFTS</Button>   
        </Box>
        </>
    )
}