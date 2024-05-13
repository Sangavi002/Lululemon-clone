import { Box, Heading, Flex, Text, Image, Link, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cart from "./image/cart.png";
import exchange from "./image/exchange.png";
import video from "./image/video.png";
import member from "./image/member.png";
import returns from "./image/returns.png";
import needle from "./image/needle.png";

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/');
      } else {
        setErrorEmail(data.error);
        setErrorMessage(data.error);
        console.error(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handleEmailChange = (e) => {
    setUsername(e.target.value);
    setErrorEmail("")
   
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage('');
  }

  return (
    <Box m="50px 130px">
      <Heading textAlign="center" size="2xl">Wellbeing made easier. We’ve got you.</Heading>
      <Box mt="30px" borderTop="1px solid #d3d5d7" mb="30px">
        <Flex>
          <Box w="100%" mt="40px" borderRight="1px solid #d3d5d7">
            <Heading size="md">Discover lululemon Membership</Heading>
            <Text mt="10px">One account. Tons of benefits. Endless possibilities.</Text>
            <Heading size="md" mt="25px">Membership benefits include</Heading>
            <Image src={cart} alt="cart" w='5%' mt="15px" /><Text mt="-24px" ml="40px">Early Access to Product Drops</Text>
            <Image src={exchange} alt="cart" w='5%' mt="15px" /><Text mt="-24px" ml="40px">Exchange or Credit on Sale Items</Text>
            <Image src={video} alt="cart" w='5%' mt="15px" /><Text mt="-24px" ml="40px">Select Peloton Classes</Text>
            <Image src={member} alt="cart" w='5%' mt="15px" /><Text mt="-24px" ml="40px">Membership Events</Text>
            <Image src={returns} alt="cart" w='5%' mt="15px" /><Text mt="-24px" ml="40px">Receipt-Free Returns</Text>
            <Image src={needle} alt="cart" w='5%' mt="15px" /><Text mt="-24px" ml="40px" mb="20px">Free Hemming</Text>
            <Link style={{ textDecoration: "underline", textUnderlineOffset: "6px", textDecorationColor: "grey", textDecorationThickness: "1px", }}>Learn More</Link>
          </Box>
          <form onSubmit={handleSubmit}>
            <Box w="100%" p="0px 100px" mt="40px">
              <Heading size="md" mb="15px">Sign in to your member account</Heading>
              <label>Email address</label>
              <Input
                text="email"
                value={username}
                onChange={handleEmailChange}
                mt="5px" mb="10px"
                border="1px solid black"></Input>
                {errorEmail&& <Text color="red" fontSize="14px">Please enter an email address</Text>}
              <label>Password</label>
              <Input
                text="password"
                value={password}
                onChange={handlePasswordChange}
                mt="5px" mb="10px"
                border="1px solid black"></Input>
              {errorMessage && <Text color="red" fontSize="14px">Please enter your password</Text>}
              <Link style={{ textDecoration: "underline", textUnderlineOffset: "8px", textDecorationColor: "grey", textDecorationThickness: "1px", }}>Forgot your password?</Link><br />
              <Button mt="18px" p="25px 119px" type="submit">SIGN IN</Button>
              <Text fontSize="10px" mt="10px" mb="20px" >By signing in, you agree to the Terms of Use and acknowledge the Privacy Policy. California consumers, see our Notice of Financial Incentives.</Text>
              <Box borderTop="1px solid black" pt="20px" mb="20px" fontSize="20px" fontWeight="700" textDecoration="underline" textUnderlineOffset="8px" textDecorationColor="grey" textDecorationThickness="1px" >Create a member account</Box>
            </Box>
          </form>
        </Flex>
      </Box>
    </Box>
  )
}
