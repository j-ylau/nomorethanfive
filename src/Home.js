import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCard from './components/CustomCard';
import { Fade } from '@chakra-ui/react';
import {
  Center,
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  useDisclosure,
  HStack,
} from '@chakra-ui/react';
export default function Home(props) {
  const { question } = props;
  const { isOpen, onToggle } = useDisclosure();
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <div>
      <Navbar />
      <div style={{ height: '100vh' }}>
        <Fade in={isOpen}>
          <HStack>
            <div
              id="card-container"
              style={{
                position: 'absolute',
                top: '0',
                width: '100%',
                margin: '0 auto',
                paddingTop: '20rem',
              }}
            >
              <Center>
                <CustomCard />
              </Center>
            </div>
          </HStack>
        </Fade>
        <Fade in={!isOpen}>
          <div id="header">
            <Container maxW={'3xl'}>
              <Stack
                as={Box}
                textAlign={'center'}
                spacing={{ base: 8, md: 14 }}
                py={{ base: 20, md: 36 }}
              >
                <Heading
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                  lineHeight={'110%'}
                >
                  Answer within{' '}
                  <Text as={'span'} color={'green.400'}>
                    five seconds
                  </Text>
                </Heading>
                <Text color={'gray.500'}>
                  You'll be given a question and you have to answer within 5
                  seconds. If you don't, prepare to get laughed at your friends.
                  Or even better, take a shot 😜.
                </Text>
                <Stack
                  direction={'column'}
                  spacing={0}
                  align={'center'}
                  alignSelf={'center'}
                  position={'relative'}
                >
                  <Button
                    colorScheme={'green'}
                    bg={'green.400'}
                    rounded={'full'}
                    px={30}
                    _hover={{
                      bg: 'green.500',
                    }}
                    onClick={() => {
                      setIsDisabled(true);
                      onToggle();
                    }}
                    disabled={isDisabled}
                  >
                    Let's Play
                  </Button>
                </Stack>
              </Stack>
            </Container>
          </div>
        </Fade>
      </div>
      <Footer />
    </div>
  );
}
