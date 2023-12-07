import { Box, Flex, Text, Card } from '@chakra-ui/react';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

export default function Footer() {
  return (
    <Box>
      <Card p={6} bgColor={'#222'} boxShadow='lg' color={'white'}>
        <Box>
          <Flex>
            <Text fontSize='xs' mr={4} fontWeight={'bold'}>Develop by B49 Dumbways •</Text>
            <Flex gap={2}>
              <AiFillGithub />
              <AiFillLinkedin />
              <BsFacebook />
              <AiFillInstagram />
            </Flex>
          </Flex>
          <Flex>
            <Text fontSize='xs'>Powered 💖 by Dumbways Indonesia • #1 Coding Bootcamp</Text>
          </Flex>
        </Box>
      </Card>
    </Box>
  );
}
