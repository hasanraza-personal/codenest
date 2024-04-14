import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import React from 'react';
import PreviousPage from '../../components/previous_page/PreviousPage';
import advanceC from '../../programming_language/advanceC';
import { dracula, CopyBlock } from 'react-code-blocks';
import "./advance_c.css";

const AdvanceC = () => {
  return (
    <>
      <PreviousPage />
      <Box mt="10px">
        <Accordion defaultIndex={[0]} allowMultiple>
          {advanceC.map((concept, key) => (
            <AccordionItem key={key} border="1px solid #E7E7E7" borderRadius="5px" mb="8px">
              <h2 style={{ borderBottom: "1px solid #E7E7E7" }}>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left' fontWeight="bold">
                    {concept.topic}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{concept.desc}</AccordionPanel>
              <AccordionPanel pb={4}>
                <CopyBlock
                  text={concept.code}
                  language="c"
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  CodeBlock
                  className="kXsryT"
                />
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </>
  )
}

export default AdvanceC
