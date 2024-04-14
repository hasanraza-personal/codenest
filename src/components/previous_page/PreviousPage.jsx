import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { ArrowLeft } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom';

const PreviousPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Flex alignItems="center" gap="14px" onClick={() => navigate(-1)}>
        <ArrowLeft fontSize="24px" />
        <Box fontSize="18px">Back</Box>
      </Flex>
    </>
  )
}

export default PreviousPage
