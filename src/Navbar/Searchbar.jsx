import { InputGroup, InputLeftElement, Input,Box } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export const Searchbar = () => {
    return( 
    <InputGroup mt='10px' ml='70px'>
        <InputLeftElement pointerEvents='none'>
        <SearchIcon mt='9px'/>
        </InputLeftElement>
        <Input type='text' placeholder='Search'  border='2px solid black' style={{width: '75%', padding: '23px 60px',}} />
    </InputGroup>
    ) 
}