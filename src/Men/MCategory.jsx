import { Box, Heading, Checkbox, Button,Flex } from "@chakra-ui/react";
import { useState } from "react";

export const MCategory = () => {
    const [showType, setShowType] = useState(false);
    const [showActivity, setShowActivity] = useState(false);
    const [showSport, setShowSport] = useState(false);
    const [showSize, setShowSize] = useState(false);
    const [showColor, setShowColor] = useState(false);
    const [showLength, setShowLength] = useState(false);
    const [showCollection, setShowCollection] = useState(false);

    const toggleType = () => {
        setShowType(!showType);
    };

    const toggleActivity = () => {
        setShowActivity(!showActivity);
    };

    const toggleSport = () => {
        setShowSport(!showSport);
    };

    const toggleSize = () => {
        setShowSize(!showSize);
    };

    const toggleColor = () => {
        setShowColor(!showColor);
    };

    const togglelength = () => {
        setShowLength(!showLength);
    };

    const toggleCollection = () => {
        setShowCollection(!showCollection);
    };

    return (
        <>
            <Box width="22%" ml="30px" p="20px" style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
                <Box h="50px" borderBottom="1px solid #e5e6e7">
                    <Heading size="md" fontSize="25px" mt="25px" textAlign="center">Men's Dresses </Heading>
                </Box>
                <Box borderBottom="1px solid #e5e6e7" style={{ height: showType ? "100px" : "40px" }}>
                    <Heading size="sm" fontSize="17px" mt="15px" mb="15px" fontWeight="500" onClick={toggleType}>Fit 
                    <span style={{marginLeft: "180px"}}>{showType ? "-" : "+"}</span>
                    </Heading>
                    {showType && (
                        <>
                            <Checkbox>Slim Fit</Checkbox> <br />
                            <Checkbox>classic Fit</Checkbox>
                        </>
                    )}
                </Box>
                <Box borderBottom="1px solid #e5e6e7" style={{ height: showActivity ? "170px" : "40px" }}>
                    <Heading size="sm" fontSize="17px" mt="15px" mb="15px" fontWeight="500" onClick={toggleActivity}>Activity 
                    <span style={{marginLeft: "142px"}}>{showActivity ? "-" : "+"}</span>
                    </Heading>
                    {showActivity && (
                        <>
                            <Checkbox>Casual</Checkbox> <br />
                            <Checkbox>Work</Checkbox> <br />
                            <Checkbox>Travel</Checkbox> <br />
                            <Checkbox>Running</Checkbox> <br />
                            <Checkbox>On The Move</Checkbox> <br />
                        </>
                    )}
                </Box>
                <Box borderBottom="1px solid #e5e6e7" style={{ height: showSport ? "245px" : "40px" }}>
                    <Heading size="sm" fontSize="17px" mt="15px" mb="15px" fontWeight="500" onClick={toggleSport}>Size
                    <span style={{marginLeft: "169px"}}>{showSport ? "-" : "+"}</span>
                    </Heading>
                    {showSport && (
                        <>
                            <Button mr="6px" bg="white" border="1px solid #e7e8e9">0</Button>
                            <Button mr="6px" bg="white" border="1px solid #e7e8e9">2</Button>
                            <Button mr="6px" bg="white" border="1px solid #e7e8e9">4</Button>
                            <Button mr="6px" bg="white" border="1px solid #e7e8e9">6</Button>
                            <Button mr="6px" mt="6px" bg="white" border="1px solid #e7e8e9">8</Button>
                            <Button mr="6px" mt="6px" bg="white" border="1px solid #e7e8e9">10</Button>
                            <Button mr="6px" mt="6px" bg="white" border="1px solid #e7e8e9">12</Button>
                            <Button mr="6px" mt="6px" bg="white" border="1px solid #e7e8e9">14</Button>
                            <Button mr="6px" mt="6px" bg="white" border="1px solid #e7e8e9">16</Button>
                            <Button mr="6px" mt="6px" bg="white" border="1px solid #e7e8e9">18</Button>
                            <Button mr="6px" mt="6px"bg="white" border="1px solid #e7e8e9">20</Button>
                            <Box borderBottom="1px dashed #e5e6e7" mt="10px" ></Box>
                            <Button mr="6px" mt="10px" bg="white" border="1px solid #e7e8e9">XS</Button>
                            <Button mr="6px" mt="10px" bg="white" border="1px solid #e7e8e9">S</Button>
                            <Button mr="6px" mt="10px" bg="white" border="1px solid #e7e8e9">M</Button>
                            <Button mr="6px" mt="10px" bg="white" border="1px solid #e7e8e9">L</Button>
                        </>
                    )}
                    
                </Box>
                <Box borderBottom="1px solid #e5e6e7" style={{ height: showSize ? "75px" : "40px" }}>
                    <Heading size="sm" fontSize="17px" mt="15px" mb="15px" fontWeight="500" onClick={toggleSize}>Size Type 
                    <span style={{marginLeft: "126px"}}>{showSize ? "-" : "+"}</span>
                    </Heading>
                    {showSize && (
                        <>
                            <Checkbox>Plus Size</Checkbox>
                        </>
                    )}
                </Box>
                <Box borderBottom="1px solid #e5e6e7" style={{ height: showColor ? "320px" : "40px" }}>
                    <Heading size="sm" fontSize="17px" mt="15px" mb="15px" fontWeight="500" onClick={toggleColor}>Colour 
                    <span style={{marginLeft: "146px"}}>{showColor ? "-" : "+"}</span>
                    </Heading>
                    {showColor && (
                        <>
                        <Flex>
                            <Box>
                                <Button mr="6px" mb="6px" bg="red" borderRadius="20px" _hover={{ border: "2px solid black" }}></Button> <span>Red</span>
                                <Button mr="6px" mb="6px" bg="black" borderRadius="20px" _hover={{ border: "2px solid black" }}></Button> <span>Black</span>
                                <Button mr="6px" mb="6px" bg="green" borderRadius="20px" _hover={{ border: "2px solid black" }}></Button> <span>Green</span>
                                <Button mr="6px" mb="6px"bg="blue" borderRadius="20px" _hover={{ border: "2px solid black" }}></Button> <span>Blue</span>
                                <Button mr="6px" mb="6px" bg="khaki" borderRadius="20px" _hover={{ border: "2px solid black" }}></Button> <span>Khaki</span>
                                <Button mr="6px" mb="6px"bg="yellow" borderRadius="20px" _hover={{ border: "2px solid black" }}></Button> <span>Yellow</span>
                            </Box>
                            <Box>
                                <Button mr="6px" mb="6px" bg="purple" borderRadius="20px" _hover={{ border: "2px solid black" }}></Button> <span>Purple</span>
                                <Button mr="6px" mb="6px" bg="brown" borderRadius="20px" _hover={{ border: "2px solid black" }}></Button> <span>Brown</span>
                                <Button mr="6px" mb="6px" bg="navy" borderRadius="20px" _hover={{ border: "2px solid black" }}></Button> <span>Navy</span>
                                <Button mr="6px" mb="6px" bg="pink" borderRadius="20px" _hover={{ border: "2px solid black" }}></Button> <span>pink</span>
                                <Button mr="6px" mb="6px" bg="orange" borderRadius="20px" _hover={{ border: "2px solid black" }}></Button> <span>Orange</span>
                                <Button mr="6px" mb="6px"bg="violet" borderRadius="20px" _hover={{ border: "2px solid black" }}></Button> <span>Violet</span>
                            </Box>
                        </Flex>
                        </>
                    )}
                </Box>
                <Box borderBottom="1px solid #e5e6e7" style={{ height: showLength ? "100px" : "40px" }}>
                    <Heading size="sm" fontSize="17px" mt="15px" mb="15px" fontWeight="500" onClick={togglelength}>Fabric 
                    <span style={{marginLeft: "150px"}}>{showType ? "-" : "+"}</span>
                    </Heading>
                    {showLength && (
                        <>
                            <Checkbox>Cotton</Checkbox> <br />
                            <Checkbox>Mesh</Checkbox>
                        </>
                    )}
                </Box>
                <Box borderBottom="1px solid #e5e6e7" style={{ height: showCollection ? "100px" : "40px" }}>
                    <Heading size="sm" fontSize="17px" mt="15px" mb="15px" fontWeight="500" onClick={toggleCollection}>Features 
                    <span style={{marginLeft: "129px"}}>{showType ? "-" : "+"}</span>
                    </Heading>
                    {showCollection && (
                        <>
                            <Checkbox>Light Weight</Checkbox> <br />
                            <Checkbox>Down</Checkbox>
                        </>
                    )}
                </Box>
            </Box>
        </>
    );
};
