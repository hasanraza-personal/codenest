import { Link as ChakraLink, Box, Flex, Image } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom'
import React from 'react';
import HomeImage from "../../public/images/image1.png";
import AdvanceCLogo from "../../public/images/advance_c.png";
import JavaLogo from "../../public/images/java.png"

const Home = () => {
  return (
    <>
      <Box>
        <Box fontSize="20px" fontWeight="bold">Let’s Get Started</Box>
        <Box fontSize="15px" color="#A0A0A0">Learning is the never ending journey that’s begins from here.</Box>
        <Image src={HomeImage} alt='Image' mt="10px" />
      </Box>

      <Box mt="24px">
        <Box fontSize="20px" fontWeight="bold">Programming Languages</Box>

        <Flex flexDirection="column" gap="6px">
          {/* C++ */}
          <ChakraLink as={ReactRouterLink} to='/advancec'>
            <Flex alignItems="center" gap="8px" p="10px" borderRadius="10px" boxShadow='base' mt="6px">
              <Image src={AdvanceCLogo} h="55px" />
              <Box>
                <Box fontSize="18px" fontWeight="bold">C++</Box>
                <Box fontSize="16px" color="#A0A0A0">Get started with C++</Box>
              </Box>
            </Flex>
          </ChakraLink>

          {/* Java */}
          <Flex alignItems="center" gap="8px" p="10px" borderRadius="10px" boxShadow='base' mt="6px">
            <Image src={JavaLogo} h="55px" />
            <Box>
              <Box fontSize="18px" fontWeight="bold">Java</Box>
              <Box fontSize="16px" color="#A0A0A0">Get started with Java</Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Home
