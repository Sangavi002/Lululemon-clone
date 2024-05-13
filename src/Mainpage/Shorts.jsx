import { Box,Heading,Flex, Center,Image,Button} from "@chakra-ui/react"
import WShort from "../image/WShort.webp"
import MShort from "../image/MShort.webp"

export const Shorts = () => {
    return(
        <>
        <Box mt="20px" mb="20px">
            <Flex alignItems="center">
                <Box w='50%' >
                    <Heading textAlign="center">Shorts on. Limits off.</Heading>
                </Box>
                <Box  w='50%' pr='30px'>
                    <Heading size="sm" textAlign="end" fontWeight="500">When non-stop comfort meets athletic performance, everything goes.</Heading>
                </Box>
            </Flex>
        </Box>
        <Box p="30px" mt="20px">
            <Flex gap="30px">
                <Box h="800px" w="50%" >
                    <Box h="600px">
                        <Image src={WShort} alt="wshorts" h="600px" w="100%"/>
                    </Box>
                    <Heading size="lg" mt="20px">The refreshingly soft Align Short.</Heading>
                    <Heading size="sm" mt="10px" fontWeight="500">Breathable, buttery soft fabric is a pick-me-up in every sense.</Heading>
                    <Button mt="20px" border="1px solid black" bg="white" letterSpacing="0.8px" p="25px 20px" fontWeight="700" _hover={{ bg: "black", color: "white" }}>SHOP WOMEN'S SHORT</Button>
                </Box>
                <Box h="800px" w="50%">
                    <Box h="600px">
                        <Image src={MShort} alt="mshorts"  h="600px" w="100%"/>
                    </Box>
                    <Heading size="lg" mt="20px">The always agile Zeroed In Short.</Heading>
                    <Heading size="sm" mt="10px" fontWeight="500">Unlock your fullest range of motion, and you’re a force to be reckoned with. </Heading>
                    <Button mt="20px" border="1px solid black" bg="white" letterSpacing="0.8px" p="25px 20px" fontWeight="700" _hover={{ bg: "black", color: "white" }}>SHOP MEN'S SHORT</Button>
                </Box>
            </Flex>
        </Box>
        </>
    )
}