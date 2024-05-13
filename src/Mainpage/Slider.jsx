import { Box, Heading, Flex, Image,Button,Center } from "@chakra-ui/react";
import { useState } from "react";

export const Slider = ({ images }) => {
    const [sliderIndex, setSliderIndex] = useState(0);
    const totalImages = images.length;

    const handleClick = (index) => {
        setSliderIndex(index);
    };

    return (
        <>
            <Box>
            <Box p="30px">
                <Flex position="relative" overflow="hidden">
                    <Box width="100%" h="400px">
                        <Flex flexWrap="wrap" gap="30px">
                            {[...images, ...images].map((ele, index) => (
                                <Box key={index} w="23%"  display={index >= sliderIndex && index < sliderIndex + 4 ? "block" : "none"}>
                                    <Image src={ele.image} alt={ele.title} h="300px" w="100%" />
                                    <Box mt="10px">
                                        <Flex>
                                            <Heading size="sm" w="88%" lineHeight="23px" fontWeight="600">{ele.title}</Heading>
                                            <Heading size="sm" fontWeight="600">{ele.price}</Heading>
                                        </Flex>
                                    </Box>
                                </Box>
                            ))}
                        </Flex>
                    </Box>
                    <Box position="absolute" bottom="5px" left="50%" transform="translateX(-50%)" display="flex">
                        {images.map((_, index) => (
                            <Box
                                key={index}
                                w="8px"
                                h="8px"
                                bg={index === sliderIndex % totalImages ? "grey" : "#e7e8e9"}
                                borderRadius="50%"
                                mx="5px"
                                onClick={() => handleClick(index)}
                                cursor="pointer"
                            />
                        ))}
                    </Box>
                    <Box position="absolute" top="50%" transform="translateY(-50%)" right="20px"></Box>
                </Flex>
            </Box>
        </Box>
        <Box>
            <Center>
                <Button  p="25px 15px"
                        border="1px solid black"
                        bg="white"
                        _hover={{ bg: "black", color: "white" }}>
                        SHOP WHAT'S NEW
                </Button>
            </Center>
        </Box>
        </>
    );
};