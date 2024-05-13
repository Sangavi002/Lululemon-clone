import { Box, Image, Link, Heading, Button,Flex } from "@chakra-ui/react";
import poster from '../image/poster.webp';

export const Poster = () => {
    return (
        <Box position="relative">
            <Box
                position="absolute"
                top="20%"
                left="9%"
                transform="translateX(-50%)"
                zIndex="1"
                bg="white"
                p="40px"
            >
                <Heading> lululemon</Heading>
                <Flex flexDirection='column'>
                <Link  pt='20px' _hover={{
                        textDecoration: "underline",
                        textDecorationColor: "red",
                        textDecorationThickness: "1px",
                        textUnderlineOffset: "6px"}}>
                Mother's Day Gifts</Link>
                <Link  pt='10px' _hover={{
                        textDecoration: "underline",
                        textDecorationColor: "red",
                        textDecorationThickness: "1px",
                        textUnderlineOffset: "6px"}}>
                Women's What's New</Link>
                <Link  pt='10px' _hover={{
                        textDecoration: "underline",
                        textDecorationColor: "red",
                        textDecorationThickness: "1px",
                        textUnderlineOffset: "6px"}}>
                All Women's</Link>
                <Link  pt='10px' _hover={{
                        textDecoration: "underline",
                        textDecorationColor: "red",
                        textDecorationThickness: "1px",
                        textUnderlineOffset: "6px"}}>
                All Men's</Link>
                <Link  pt='10px' _hover={{
                        textDecoration: "underline",
                        textDecorationColor: "red",
                        textDecorationThickness: "1px",
                        textUnderlineOffset: "6px"}}>
                All Accessories</Link>
                </Flex>
            </Box>
            <Image src={poster} alt="login" w='90%' h='550px' ml='auto' pr='30px' />
            <Button
                position="absolute"
                bottom="10px"
                right="60px"
                zIndex="2" 
                p="25px 15px"
                border="1px solid black"
                _hover={{ bg: "black", color: "white" }}
            >
                SHOP WHAT'S NEW
            </Button>
        </Box>
    )
}
