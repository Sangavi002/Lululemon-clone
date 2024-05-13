import { Box, Image, Heading, Flex, Text, Select, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import info from "./Women/dress/info.png"
import { useNavigate } from "react-router-dom";


export const Cart = () => {
    const [products, setProducts] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://swanky-carpal-work.glitch.me/cart`)
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.log(error))
    },[]);

    const removeItemFromCart = (id) => {
        fetch(`https://swanky-carpal-work.glitch.me/cart/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                setProducts(products => {
                    return products.filter((product) => product.id !== id);
                });
            })
            .catch(error => {
                console.error('Error removing item from cart:', error);
            });
    }

    const calculateSubtotal = () => {
        let total = 0;
        products.forEach((product) => {
            const itemPrice = Number(product.price);
            const itemQuantity = Number(product.quantity|| 1); // Ensure quantity is converted to a number
            total += itemPrice * itemQuantity;
        });
        setSubtotal(total);
    }

    useEffect(() => {
        calculateSubtotal();
    }, [products]);

    const handleQuantityChange = (cartItem, cartId, newQuantity) => {
  
        cartItem.quantity = newQuantity;

        fetch(`https://swanky-carpal-work.glitch.me/cart/${cartId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cartItem),
        }).then(
            response => response.json()
        ).then(data => {
            setProducts(prevProducts => {
                return prevProducts.map(product => {
                    if (product.id === cartId) {
                        return { ...product, quantity: parseInt(newQuantity)  };
                    } else {
                        return product;
                    }
                    
                });
            });
        }).catch(error => {
            console.error('Error removing item from cart:', error);
        });
    };


    return (
        <Box bg="#fafafa">
            <Flex>
                <Box w="70%" p={30}>
                    <Heading size="lg">My Bag ({products.length} Items)</Heading> 
                    {products.map((ele) => (
                        <Box key={ele.id} mt>
                            <Flex>
                                <Box mt="20px" w="20%">
                                    <Image src={ele.image} alt={ele.title} width='100%'/>
                                </Box>
                                <Box mt="20px" w="80%" p={30}>
                                    <Heading size="" fontWeight="600">{ele.title}</Heading>
                                    <Box>
                                        <Flex>
                                            <Box w="50%">
                                                <Text>{ele.color}</Text>
                                                <Text>Size {ele.size}</Text>
                                                <Text mt="45px">Free Shipping + Free Returns</Text>
                                            </Box>
                                            <Box w="50%">
                                                <Box>
                                                    <Flex>
                                                        <Box>
                                                            <Text mt="20px" mr="20px">Item Price</Text>
                                                            <Text mt="10px">${ele.price}.00</Text>
                                                        </Box>
                                                        <Box pr="30px">
                                                            <Text mt="20px">Quantity</Text>
                                                            <Select mt="10px" defaultValue={ele.quantity || 1} onChange={(e) => handleQuantityChange(ele, ele.id, e.target.value)}>
                                                                <option value='1'>1</option>
                                                                <option value='2'>2</option>
                                                                <option value='3'>3</option>
                                                                <option value='4'>4</option>
                                                                <option value='5'>5</option>
                                                            </Select>
                                                        </Box>
                                                        <Box>
                                                            <Text mt="20px">Total Price</Text>
                                                            <Text mt="10px">${ele.price * (ele.quantity  || 1)}.00</Text>
                                                            <Button onClick={() => removeItemFromCart(ele.id)} bg="white" mt="10px" textDecorationLine="underline">Remove</Button>
                                                        </Box>
                                                    </Flex>
                                                </Box>  
                                            </Box>
                                        </Flex>
                                    </Box>
                                </Box> 
                            </Flex>
                        </Box>
                    ))}
                </Box>
                <Box w="30%" p={30}>
                    <Heading size="lg">Order Summary</Heading>
                    <Box mt="20px" >
                        <Flex justifyContent="space-between" m="5px 0px">
                            <Text fontWeight="500" fontSize={15}>Subtotal</Text>
                            <Text fontWeight="500" fontSize={15}>${subtotal}.00</Text>
                        </Flex>
                        <Box borderTop="1px solid #f0f0f0" borderBottom="1px solid #f0f0f0">
                            <Flex justifyContent="space-between" m="5px 0px">
                                <Text fontWeight="500" fontSize={15}>Shipping <Image src={info} alt="info" w="8%" mt="-17px" ml={67}/></Text>
                                <Text fontWeight="500" fontSize={15}>FREE</Text>
                            </Flex>
                        </Box>
                        <Flex justifyContent="space-between" m="5px 0px">
                            <Text fontWeight="500" fontSize={15}>Tax <Image src={info} alt="info" w="10%" mt="-17px" ml={26}/></Text>
                            <Text fontWeight="500" fontSize={15}>Calculated at checkout</Text>
                        </Flex>
                        <Flex justifyContent="space-between" m="5px 0px" borderTop="1px solid #f0f0f0">
                            <Text fontWeight="500" fontSize={18} mt="5px">Estimated Total</Text>
                            <Text fontWeight="500" fontSize={18} mt="5px">USD ${subtotal}.00</Text>
                        </Flex>
                    </Box>
'                    <Button bg="#c8102e" color="white" letterSpacing="1px" fontSize="15px" p="30px 105px" fontWeight={700} mt="30px" onClick={() => navigate('/checkout')}>
'                        <svg height="24" width="24" style={{marginRight: "7px"}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="iconButtonIcon-3D2lQ" focusable="false" role="img" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.69 19.733a3.953 3.953 0 0 1-3.947-3.96 6.2 6.2 0 0 1 .55-2.183c.19-.511.378-1.019.567-1.523.476-1.194.83-2.433 1.06-3.697.157-1 .14-2.227-.623-3-.584-.587-1.487-.703-2.297-.723s-1.713.136-2.297.726c-.763.77-.78 2-.623 3 .23 1.264.585 2.5 1.06 3.694.187.506.376 1.014.567 1.523a6.2 6.2 0 0 1 .55 2.183 3.943 3.943 0 0 1-7.61 1.474 2.573 2.573 0 0 0 3.77-.31c.532-.72.693-1.65.433-2.507-.257-.93-.82-1.667-1.27-2.547-1.463-2.5-1.403-4.37-1.403-4.37 0-3.73 3.56-4.363 6.823-4.363 3.263 0 6.823.633 6.823 4.363 0 0 .06 1.87-1.403 4.37-.45.864-1 1.617-1.27 2.547-.26.857-.1 1.787.433 2.507a2.573 2.573 0 0 0 3.77.31 3.947 3.947 0 0 1-3.663 2.486z" fill="currentColor"></path></svg>
                        CHECKOUT</Button>
                    <Text textAlign="center" m="10px 0px" fontWeight={500}fontSize="15px">or checkout quickly with</Text>
                    <Button bg="#0070ba" p="30px 115px"><svg width="101px" height="32" viewBox="0 0 101 32" preserveAspectRatio="xMinYMin meet" xmlns="http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg"><path fill="#ffffff" d="M 12.237 2.8 L 4.437 2.8 C 3.937 2.8 3.437 3.2 3.337 3.7 L 0.237 23.7 C 0.137 24.1 0.437 24.4 0.837 24.4 L 4.537 24.4 C 5.037 24.4 5.537 24 5.637 23.5 L 6.437 18.1 C 6.537 17.6 6.937 17.2 7.537 17.2 L 10.037 17.2 C 15.137 17.2 18.137 14.7 18.937 9.8 C 19.237 7.7 18.937 6 17.937 4.8 C 16.837 3.5 14.837 2.8 12.237 2.8 Z M 13.137 10.1 C 12.737 12.9 10.537 12.9 8.537 12.9 L 7.337 12.9 L 8.137 7.7 C 8.137 7.4 8.437 7.2 8.737 7.2 L 9.237 7.2 C 10.637 7.2 11.937 7.2 12.637 8 C 13.137 8.4 13.337 9.1 13.137 10.1 Z"></path><path fill="#ffffff" d="M 35.437 10 L 31.737 10 C 31.437 10 31.137 10.2 31.137 10.5 L 30.937 11.5 L 30.637 11.1 C 29.837 9.9 28.037 9.5 26.237 9.5 C 22.137 9.5 18.637 12.6 17.937 17 C 17.537 19.2 18.037 21.3 19.337 22.7 C 20.437 24 22.137 24.6 24.037 24.6 C 27.337 24.6 29.237 22.5 29.237 22.5 L 29.037 23.5 C 28.937 23.9 29.237 24.3 29.637 24.3 L 33.037 24.3 C 33.537 24.3 34.037 23.9 34.137 23.4 L 36.137 10.6 C 36.237 10.4 35.837 10 35.437 10 Z M 30.337 17.2 C 29.937 19.3 28.337 20.8 26.137 20.8 C 25.037 20.8 24.237 20.5 23.637 19.8 C 23.037 19.1 22.837 18.2 23.037 17.2 C 23.337 15.1 25.137 13.6 27.237 13.6 C 28.337 13.6 29.137 14 29.737 14.6 C 30.237 15.3 30.437 16.2 30.337 17.2 Z"></path><path fill="#ffffff" d="M 55.337 10 L 51.637 10 C 51.237 10 50.937 10.2 50.737 10.5 L 45.537 18.1 L 43.337 10.8 C 43.237 10.3 42.737 10 42.337 10 L 38.637 10 C 38.237 10 37.837 10.4 38.037 10.9 L 42.137 23 L 38.237 28.4 C 37.937 28.8 38.237 29.4 38.737 29.4 L 42.437 29.4 C 42.837 29.4 43.137 29.2 43.337 28.9 L 55.837 10.9 C 56.137 10.6 55.837 10 55.337 10 Z"></path><path fill="#ffffff" d="M 67.737 2.8 L 59.937 2.8 C 59.437 2.8 58.937 3.2 58.837 3.7 L 55.737 23.6 C 55.637 24 55.937 24.3 56.337 24.3 L 60.337 24.3 C 60.737 24.3 61.037 24 61.037 23.7 L 61.937 18 C 62.037 17.5 62.437 17.1 63.037 17.1 L 65.537 17.1 C 70.637 17.1 73.637 14.6 74.437 9.7 C 74.737 7.6 74.437 5.9 73.437 4.7 C 72.237 3.5 70.337 2.8 67.737 2.8 Z M 68.637 10.1 C 68.237 12.9 66.037 12.9 64.037 12.9 L 62.837 12.9 L 63.637 7.7 C 63.637 7.4 63.937 7.2 64.237 7.2 L 64.737 7.2 C 66.137 7.2 67.437 7.2 68.137 8 C 68.637 8.4 68.737 9.1 68.637 10.1 Z"></path><path fill="#ffffff" d="M 90.937 10 L 87.237 10 C 86.937 10 86.637 10.2 86.637 10.5 L 86.437 11.5 L 86.137 11.1 C 85.337 9.9 83.537 9.5 81.737 9.5 C 77.637 9.5 74.137 12.6 73.437 17 C 73.037 19.2 73.537 21.3 74.837 22.7 C 75.937 24 77.637 24.6 79.537 24.6 C 82.837 24.6 84.737 22.5 84.737 22.5 L 84.537 23.5 C 84.437 23.9 84.737 24.3 85.137 24.3 L 88.537 24.3 C 89.037 24.3 89.537 23.9 89.637 23.4 L 91.637 10.6 C 91.637 10.4 91.337 10 90.937 10 Z M 85.737 17.2 C 85.337 19.3 83.737 20.8 81.537 20.8 C 80.437 20.8 79.637 20.5 79.037 19.8 C 78.437 19.1 78.237 18.2 78.437 17.2 C 78.737 15.1 80.537 13.6 82.637 13.6 C 83.737 13.6 84.537 14 85.137 14.6 C 85.737 15.3 85.937 16.2 85.737 17.2 Z"></path><path fill="#ffffff" d="M 95.337 3.3 L 92.137 23.6 C 92.037 24 92.337 24.3 92.737 24.3 L 95.937 24.3 C 96.437 24.3 96.937 23.9 97.037 23.4 L 100.237 3.5 C 100.337 3.1 100.037 2.8 99.637 2.8 L 96.037 2.8 C 95.637 2.8 95.437 3 95.337 3.3 Z"></path></svg></Button>
                </Box>
            </Flex>
        </Box> 
    );
}
