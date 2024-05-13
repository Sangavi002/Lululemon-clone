import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box,Image,Text,Flex,Heading,Button,Radio,Center} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import error from "../Women/dress/error.png";

export const WomenDressDetail = () => {
    const {userId}  = useParams();
    const [products, setProducts] = useState({});
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://swanky-carpal-work.glitch.me/womendress/?id=${userId}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setProducts(data[0])})
        .catch((err) => console.log(err))
    },[]);

    const updateCart = async () => {
        if (!selectedColor || !selectedSize) {
            setErrorMessage("Please select both color and size.");
            return;
        }

        let currentProduct = products;
        currentProduct['productId'] = currentProduct['id'] ? currentProduct['id'] : null;
        delete currentProduct['id'];
        
        try {
        const response = await fetch('https://swanky-carpal-work.glitch.me/cart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...currentProduct,
                color: selectedColor, 
                size: selectedSize 
            }),
        });
        const data = await response.json();
            if (response.ok) {
                navigate('/cart');
                
            } else {
                
                console.log(data.error);
            }
        } catch (error) {
        console.log(error);
        }
    }
    
    return (
        <>
            <Box p={30}>
                <Flex>
                    <Box  w="50%">
                        <Image src={products.image} alt={products.title} h="680px" w="100%" />
                    </Box>
                    <Box w="50%" bg="#fafafa" p={50}>
                        <Heading size="xl" fontWeight="700">{products.title}</Heading>
                        <Text fontWeight="400" mt="25px">${products.price} USD</Text>
                        <Text mt="25px" fontWeight="700">Color</Text>
                        <Button m="8px"  bg="red" borderRadius="20px" border={selectedColor === "Red" ? "4px solid grey" : ""} _hover={{ border: "4px solid grey" }} onClick={() => setSelectedColor("Red")}
                        ></Button>{" "}
                        <span>Red</span>
                        <Button m="8px" bg="black" border={selectedColor === "Black" ? "4px solid grey" : ""} borderRadius="20px" _hover={{ border: "4px solid grey" }}  onClick={() => setSelectedColor("Black")}></Button> <span>Black</span>
                        <Button m="8px" bg="green" border={selectedColor === "Green" ? "4px solid grey" : ""} borderRadius="20px" _hover={{ border: "4px solid grey" }} onClick={() => setSelectedColor("Green")}></Button> <span>Green</span>
                        <Button m="8px" bg="blue" border={selectedColor === "Blue" ? "4px solid grey" : ""} borderRadius="20px" _hover={{ border: "4px solid grey" }} onClick={() => setSelectedColor("Blue")}></Button> <span>Blue</span>
                        <Button m="8px" bg="yellow" border={selectedColor === "Yellow" ? "4px solid grey" : ""} borderRadius="20px" _hover={{ border: "4px solid grey" }} onClick={() => setSelectedColor("Yellow")}></Button> <span>Yellow</span>
                        
                        {errorMessage && (
                            <>
                            <Box border="1px solid red" p="15px" mt="20px" bg="#ffe1e4">
                                <Image src={error} alt="error" w="5%"/>
                                <Text mt="-25px" ml="35px">{errorMessage}</Text>
                            </Box>
                            </>
                        )}

                        <Text mt="20px" fontWeight="700">Select Size</Text>  

                        <Button m="6px" bg="white" border={selectedSize === "2" ? "4px solid grey" : "2px solid #f0f0f0"} onClick={() => setSelectedSize("2")}>2</Button>
                        <Button m="6px" bg="white" border={selectedSize === "4" ? "4px solid grey" : "2px solid #f0f0f0"} onClick={() => setSelectedSize("4")}>4</Button>
                        <Button m="6px" bg="white" border={selectedSize === "6" ? "4px solid grey" : "2px solid #f0f0f0"} onClick={() => setSelectedSize("6")}>6</Button>
                        <Button m="6px" bg="white" border={selectedSize === "8" ? "4px solid grey" : "2px solid #f0f0f0"} onClick={() => setSelectedSize("8")}>8</Button>
                        <Button m="6px" bg="white" border={selectedSize === "10" ? "4px solid grey" : "2px solid #f0f0f0"} onClick={() => setSelectedSize("10")}>10</Button>
                        <Button m="6px" bg="white" border={selectedSize === "12" ? "4px solid grey" : "2px solid #f0f0f0"} onClick={() => setSelectedSize("12")}>12</Button>
                        <Button m="6px" bg="white" border={selectedSize === "14" ? "4px solid grey" : "2px solid #f0f0f0"} onClick={() => setSelectedSize("14")}>14</Button>
                        <Button m="6px" bg="white" border={selectedSize === "16" ? "4px solid grey" : "2px solid #f0f0f0"} onClick={() => setSelectedSize("16")}>16</Button>   
                        
                        <Box border="2px solid #f0f0f0" borderRadius="10px" mt="20px" w="90%">
                            <Box  borderBottom="1px solid #f0f0f0" h="90px" pl="10px">
                                <Radio colorScheme='red' size="md" mt="10px"><Heading>Ship it to me</Heading></Radio>
                                <Heading size="sm" mt="7px" ml="25px" fontWeight="400">Free shipping and returns</Heading>
                            </Box> 
                            <Box h="40px" borderBottom="1px solid #f0f0f0" pl="10px">
                                <Heading size="md" mt="15px">Pick up in-store</Heading>
                            </Box> 
                            <Box h="70px">
                                <Center>
                                 <Button mt="10px" bg="#c8102e" color="white" p="25px 150px" onClick={updateCart}>ADD TO BAG</Button>
                                </Center>
                            </Box> 
                        </Box>
                    </Box>
                </Flex>

            </Box>
        </>
    ); 
}

