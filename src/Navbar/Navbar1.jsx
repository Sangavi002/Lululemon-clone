import { Box, Button, Center, Flex, Image } from "@chakra-ui/react";
import direction from '../image/direction.png';
import gift from '../image/gift.png'
import help from '../image/help.png'
import world from '../image/world.png'

export const Navbar1= () => {
    return(
        <>
        <Box>
        <Flex justifyContent="end" bg='#edf2f6'>
          <Center>  
            <Image src={direction} alt="direction" w={5} h='20px'/>
          </Center>
          <Button size='sm'fontWeight={400} p='4px'> 
            Store locator
          </Button>
          <Center>  
            <Image src={gift} alt="direction" w={5} h='20px' ml='15px'/>
          </Center>
          <Button size='sm' fontWeight={400} p='4px' >
            Gift Cards
          </Button>
          <Center>  
            <Image src={help} alt="direction" w={5} h='20px'ml='15px'/>
          </Center>
          <Button size='sm'fontWeight={400} p='4px'>
            Get Help
          </Button>
          <Center>  
            <Image src={world} alt="direction" w={5} h='20px' ml='15px'/>
          </Center>
          <Button size='sm'fontWeight={400} p='4px' mr='15px'>
            USA
          </Button>
        </Flex>
      </Box>
        </>
        
    )
}