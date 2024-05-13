import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export const OrderSummary = () => {
    const [products, setProducts] = useState([]);
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        fetch(`https://swanky-carpal-work.glitch.me/cart`)
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.log(error))
    },[]);

    useEffect(() => {
        let total = 0;
        products.forEach((product) => {
            const itemPrice = Number(product.price);
            const itemQuantity = Number(product.quantity || 1); 
            total += itemPrice * itemQuantity;
        });
        setSubtotal(total);
    }, [products]);

    return(
        <>
        <Box h="350px" overflow="scroll">
            {products.map((ele) => (
                <Box key={ele.id} >
                    <Flex>
                        <Box mt="20px" w="35%">
                            <Image src={ele.image} alt={ele.title} width='100%'/>
                        </Box>
                        <Box mt="20px" w="65%" p="15px" >
                            <Heading size="" fontWeight="600">{ele.title}</Heading>
                            <Text fontSize="14px">{ele.color}</Text>
                            <Text fontSize="14px">Size {ele.size}</Text>
                            <Box >
                                <Flex >
                                    <Box fontSize="14px" >Quantity {ele.quantity || 1}</Box>
                                    <Box ml="50px" fontSize="14px">${ele.price * (ele.quantity  || 1)}.00</Box>
                                </Flex>
                            </Box>
                        </Box> 
                    </Flex>
                </Box>
            ))}
        </Box>
        <Box mt="20px" >
            <Flex justifyContent="space-between" m="5px 0px">
                <Text fontWeight="500" fontSize={15}>Subtotal</Text>
                <Text fontWeight="500" fontSize={15}>${subtotal.toFixed(2)}</Text>
            </Flex>
            <Box >
                <Flex justifyContent="space-between" m="5px 0px">
                    <Text fontWeight="500" fontSize={15}>Shipping </Text>
                    <Text fontWeight="500" fontSize={15}>FREE</Text>
                </Flex>
            </Box>
            <Flex justifyContent="space-between" m="5px 0px">
                <Text fontWeight="500" fontSize={15}>Tax </Text>
                <Text fontWeight="500" fontSize={15}>Calculated at checkout</Text>
            </Flex>
            <Flex justifyContent="space-between" m="5px 0px" borderTop="2px solid #f0f0f0">
                <Text fontWeight="500" fontSize={18} mt="5px">Order total</Text>
                <Text fontWeight="500" fontSize={18} mt="5px">USD {subtotal.toFixed(2)}</Text>
            </Flex>
        </Box>
        </>
    )
}
