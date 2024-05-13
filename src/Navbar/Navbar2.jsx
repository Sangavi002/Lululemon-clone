import { Routes,Route } from "react-router-dom"
import { Box,Center,Image,Flex, Icon}from '@chakra-ui/react';
import logo from '../image/logo.png';
import { WomenDropDown } from './WomenDropDown';
import { MenDropDown } from './MenDropDown';
import { AccessoriesDD } from './AccessoriesDD';
import { ShoesDD } from './ShoesDD';
import { LikenewDD } from './LikenewDD';
import { MotherdayDD } from './MotherdayDD';
import { Searchbar } from './Searchbar';
import { Icons } from './Icons';
import { WomenDress } from "../Women/WomenDress";

export const Navbar2 = () => {
    return(
        <>
        <Box  h='70px' >
            <Flex>
                <Center>  
                    <Image src={logo} alt="direction" w='100%' h='40px' ml={30}/>
                </Center>
                <Box width='70%'>
                    <Flex>
                        <p style={{marginTop: '25px',marginLeft: '40px'}}><WomenDropDown /></p>
                        <p style={{marginTop: '25px',marginLeft: '40px'}}><MenDropDown /></p>
                        <p style={{marginTop: '25px',marginLeft: '40px'}}> <AccessoriesDD /></p>
                        <p style={{marginTop: '25px',marginLeft: '40px'}}> <ShoesDD /></p>
                        <p style={{marginTop: '25px',marginLeft: '40px'}}> <LikenewDD /></p>
                        <p style={{marginTop: '25px', marginLeft: '40px'}}> <MotherdayDD /></p>
                    </Flex>
                </Box>
                <Box>
                     <Searchbar />
                </Box>
                <Box >
                    <Icons />
                </Box>
            </Flex>
        </Box>
        
        </>
    )
}