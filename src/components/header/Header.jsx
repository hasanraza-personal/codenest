import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import LogoImage from "../../public/images/logo.png";

const Header = () => {
  return (
    <>
      <Box>
        <Image src={LogoImage} alt='Logo' h="50px" py="4px" />
      </Box>
    </>
  )
}

export default Header
