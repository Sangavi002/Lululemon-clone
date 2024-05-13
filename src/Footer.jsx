import { Box,Flex,UnorderedList,ListItem,Heading,Image} from "@chakra-ui/react";
import privacy from './image/privacy.svg';
import twitter from "./image/twitter.png";
import pinterest from "./image/pinterest.png";
import youtube from "./image/youtube.png";
import facebook from "./image/facebook.png";
import instagram from "./image/instagram.png";

export const Footer = () => {
    return(
        <>
        <Box mt="50px">
            <Flex>
                <Box w="25%" p="10px"> 
                <UnorderedList listStyleType="none" >
                    <Heading size="xs" mt="25px" letterSpacing=".8px" fontWeight="700">MY ACCOUNT</Heading>
                    <ListItem mt="25px" color="#53565a" fontSize="15px" fontWeight="400">Membership Program</ListItem>
                    <ListItem mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Sign In</ListItem>
                    <ListItem mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Register</ListItem>
                    <ListItem mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Order Status</ListItem>
                    <ListItem mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Returns</ListItem>
                </UnorderedList>
                </Box>
                <Box w="25%" p="10px">
                <UnorderedList listStyleType="none">
                    <Heading size="xs" mt="25px" letterSpacing=".8px" fontWeight="700">HELP</Heading>
                    <ListItem mt="25px" color="#53565a" fontSize="15px" fontWeight="400">FAQ</ListItem>
                    <ListItem mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Acessibility Statement</ListItem>
                    <ListItem mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Services</ListItem>
                    <ListItem mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Ordering</ListItem>
                    <ListItem mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Shipping Policy</ListItem>
                    <ListItem mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Returns</ListItem>
                    <ListItem mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Redeem Gift cards</ListItem>
                    <ListItem mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Sizing</ListItem>
                    <ListItem mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Our Products </ListItem>
                </UnorderedList>
                </Box>
                <Box w="25%" p="10px">
                <UnorderedList listStyleType="none">
                    <Heading size="xs" mt="25px" letterSpacing=".8px" fontWeight="700">ABOUT US</Heading>
                    <ListItem mt="25px" color="#53565a" fontSize="15px" fontWeight="400">Our Business</ListItem>
                    <ListItem mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Media</ListItem>
                    <ListItem mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Investors</ListItem>
                    <ListItem mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Strategic Sales</ListItem>
                    <ListItem mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Affiliates and Creators</ListItem>
                    <ListItem mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Sweat Collective</ListItem>
                    <ListItem mt="12px" color="#53565a" fontSize="15px" fontWeight="400">FURTHER</ListItem>
                </UnorderedList>
                </Box>
                <Box w="25%" p="10px">
                <UnorderedList listStyleType="none">
                    <Heading size="xs" mt="25px" letterSpacing=".8px" fontWeight="700">CONTACT US</Heading>
                    <ListItem mt="25px" color="#53565a" fontSize="15px" fontWeight="400">Live Chat</ListItem>
                    <ListItem mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Email Sign Up</ListItem>
                    <ListItem mt="12px" color="#53565a" fontSize="15px" fontWeight="400">Contact Us</ListItem>
                </UnorderedList>
                </Box>
            </Flex>
        </Box>
        <Box>
            <Flex>
            <Box w="25%" p="10px">
                <UnorderedList listStyleType="none">
                    <ListItem mt="15px" color="#53565a" letterSpacing=".8px" fontWeight="600" fontSize="13px">CAREER</ListItem>
                    <ListItem mt="15px" color="#53565a" letterSpacing=".8px" fontWeight="600" fontSize="13px">COMMUNITY</ListItem>
                    <ListItem mt="15px" color="#53565a" letterSpacing=".8px" fontWeight="600" fontSize="13px">LIKE NEW</ListItem>
                    <ListItem mt="15px" color="#53565a" letterSpacing=".8px" fontWeight="600" fontSize="13px">SUSTAINABILITY</ListItem>
                    <ListItem mt="15px" color="#53565a" letterSpacing=".8px" fontWeight="600" fontSize="13px">SOCIAL IMPACT</ListItem>
                    <ListItem mt="15px" color="#53565a" letterSpacing=".8px" fontWeight="600" fontSize="13px">DIVERSITY AND INCLUSION</ListItem>
                    <ListItem mt="15px" color="#53565a" letterSpacing=".8px" fontWeight="600" fontSize="13px">LULULEMON APPS</ListItem>
                    <ListItem mt="15px" color="#53565a" letterSpacing=".8px" fontWeight="600" fontSize="13px">SITEMAP</ListItem>
                </UnorderedList>
            </Box>
            <Box w="25%" p="10px">
                <UnorderedList listStyleType="none">
                    <ListItem mt="15px" color="#53565a" letterSpacing=".8px" fontWeight="600" fontSize="13px">GIFT CARDS</ListItem>
                    <ListItem mt="15px" color="#53565a" letterSpacing=".8px" fontWeight="600" fontSize="13px">STORE LOCATOR</ListItem>
                    <ListItem mt="15px" color="#53565a" fontWeight="400" fontSize="15px">Privacy Policy</ListItem>
                    <ListItem mt="15px" color="#53565a" fontWeight="400" fontSize="15px" display="flex" alignItems="center">
                        Your Privacy Choices
                        <Image src={privacy} alt="privacy" w="10%" ml="10px" />
                    </ListItem>
                    <ListItem mt="15px" color="#53565a"  fontWeight="400" fontSize="15px">California Privacy Rights</ListItem>
                    <ListItem mt="15px" color="#53565a"  fontWeight="400" fontSize="15px">California Transparency Act</ListItem>
                </UnorderedList>
            </Box>
            <Box p="10px">
                <Flex>
                    <Image src={twitter} alt="twitter" w="30px" mr="50px"/>
                    <Image src={pinterest} alt="twitter" w="30px" mr="50px"/>
                    <Image src={youtube} alt="twitter" w="30px" mr="50px"/>
                    <Image src={facebook} alt="twitter" w="30px" mr="50px"/>
                    <Image src={instagram} alt="twitter" w="30px" mr="50px"/>
                </Flex>
            </Box>
            </Flex>
        </Box>
        </>
    )
}