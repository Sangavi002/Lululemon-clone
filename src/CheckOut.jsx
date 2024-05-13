
import { Heading, Box, Flex, Image, Text, Input, Checkbox, Select, Button, Center } from "@chakra-ui/react";
import tick from "./image/tick.png";
import { OrderSummary } from "./OrderSummary";
import { useCheck } from './Check'; 

export const CheckOut = () => {
    const {
        email, setEmail,
        location, setLocation,
        fName, setFName,
        lName, setLName,
        number, setNumber,
        address, setAddress,
        city, setCity,
        state, setState,
        zip, setZip,
        errors
    } = useCheck();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!Object.values(errors).some(error => error)) {
            alert("Your Order successfully placed");
            setEmail("");
            setFName("");
            setLName("");
            setNumber("");
            setAddress("");
            setCity("");
            setState("");
            setZip("");

        fetch('https://swanky-carpal-work.glitch.me/cart', {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then(
            response => response.json()
        ).then(data => {
            console.log(data)
        }).catch(error => {
            console.error('Error removing item from cart:', error);
        });

            console.log('Form data:', { email, location, fName, lName, number, address, city, state, zip });
        } else {
            alert("Please enter all fields");
            console.log('Form submission failed due to validation errors.');
        }
    };

    return (
        <>
            <Heading textAlign="center">Checkout</Heading>
            <Box p="30px 120px" >
                <Flex>
                    <Box w="60%" >
                        <Box p="20px">
                            <Image src={tick} alt="correct" w="4%" />
                            <Heading mt="-23px" ml="35px" size="md">Contact information</Heading>
                            <Text mt="10px" fontWeight="500">Email address (for order notification)</Text>
                            <Input type="email" mt="6px" border="1px solid black" value={email} onChange={(e) => setEmail(e.target.value)} />
                            {errors.emailError && <Text color="red" fontSize="13px">{errors.emailError}</Text>}

                            <Checkbox defaultChecked mt="5px">Sign me up for lululemon emails (you can unsubscribe at any time). See our privacy policy for details.</Checkbox>
                        </Box>
                        <Box p="20px">
                            <Heading size="md" mb="15px">Shipping address</Heading>
                            <label>Location</label>
                            <Select placeholder='United States' mt="5px" mb="15px" border="1px solid black" value={location} onChange={(e) => setLocation(e.target.value)}>
                                <option value='United state'>United states</option>
                                <option value='India'>India</option>
                                <option value='Canada'>Canada </option>
                                <option value='United Kingdom'>United Kingdom</option>
                                <option value='France'>France</option>
                                <option value='Germany'>Germany </option>
                            </Select>
                            {errors.locationError && <Text color="red" fontSize="13px" mt="-13px">{errors.locationError}</Text>}
                            <Box mb="20px">
                                <Flex flexDirection="row" justifyContent="space-between">
                                    <Box pr="10px" w="100%">
                                        <Text>First name</Text>
                                        <Input type="text" mt="5px" border="1px solid black" value={fName} onChange={(e) => setFName(e.target.value)} />
                                        {errors.fNameError && <Text color="red" fontSize="13px">{errors.fNameError}</Text>}
                                    </Box>
                                    <Box pr="10px" w="100%">
                                        <Text>Last name</Text>
                                        <Input type="text" mt="5px" border="1px solid black" value={lName} onChange={(e) => setLName(e.target.value)} />
                                        {errors.lNameError && <Text color="red" fontSize="13px">{errors.lNameError}</Text>}
                                    </Box>
                                </Flex>
                            </Box>

                            <label >Phone number</label>
                            <Input type="Number" mt="5px" mb="4px" border="1px solid black" value={number} onChange={(e) => setNumber(e.target.value)} />
                            {errors.numberError && <Text color="red" fontSize="13px">{errors.numberError}</Text>}
                            <Text fontSize="14px" color="#7e7379" fontWeight="400" mb="15px">This will be only used for delivery related issues.</Text>
                            <label >Address</label>
                            <Input type="text" mt="5px" mb="20px" placeholder="Include apt, suite, or floor number here" border="1px solid black" value={address} onChange={(e) => setAddress(e.target.value)} />
                            {errors.addressError && <Text color="red" fontSize="13px" mt="-19px">{errors.addressError}</Text>}
                            <Box>
                                <Flex flexDirection="row">
                                    <Box pr="10px">
                                        <Text>City</Text>
                                        <Input type="text" mt="5px" border="1px solid black" value={city} onChange={(e) => setCity(e.target.value)} />
                                        {errors.cityError && <Text color="red" fontSize="13px">{errors.cityError}</Text>}
                                    </Box>
                                    <Box pr="10px">
                                        <Text>State</Text>
                                        <Input type="text" mt="5px" border="1px solid black" value={state} onChange={(e) => setState(e.target.value)} />
                                        {errors.stateError && <Text color="red" fontSize="13px">{errors.stateError}</Text>}
                                    </Box>
                                    <Box>
                                        <Text>Zipcode</Text>
                                        <Input type="number" mt="5px" border="1px solid black" value={zip} onChange={(e) => setZip(e.target.value)} />
                                        {errors.zipError && <Text color="red" fontSize="13px">{errors.zipError}</Text>}
                                    </Box>
                                </Flex>
                            </Box>
                            <Checkbox defaultChecked mt="25px" mb="10px">Save address to my account</Checkbox>
                        </Box>
                    </Box>
                    <Box border="1px solid" w="40%" p="30px">
                        <Heading size="lg" mb="15px">Order summary</Heading>
                        <Box>
                            <OrderSummary />
                        </Box>
                    </Box>
                </Flex>
            </Box>
            <Center>
                <Button bg="#c8102e" color="white" p="25px 40px" letterSpacing="1px" onClick={handleSubmit}>PLACE YOUR ORDER</Button>
            </Center>
        </>
    )
}
