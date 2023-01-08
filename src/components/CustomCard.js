import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import questions from '../data/questions';

export default function CustomCard(props) {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [usedQuestions, setUsedQuestions] = useState([]);

  const handleNextQuestion = () => {
    // get a random question that has not been used yet
    const unusedQuestions = questions.filter(question => !usedQuestions.includes(question));
    const randomQuestion = unusedQuestions[Math.floor(Math.random() * unusedQuestions.length)];

    // set the current question to the randomly chosen question
    setCurrentQuestion(randomQuestion);

    // add the randomly chosen question to the list of used questions
    setUsedQuestions([...usedQuestions, randomQuestion]);
  };

  return (
    <Card align="center" w={350} h={400}>
      <CardHeader>
        <Heading size="md">No More Than Five</Heading>
      </CardHeader>
      <CardBody align="center">
        <Text fontSize="25px">{currentQuestion || 'Click "Next Question" to start'}</Text>
      </CardBody>
      <CardFooter>
        <Button colorScheme="green" onClick={handleNextQuestion}>
          Next Question
        </Button>
      </CardFooter>
    </Card>
  );
}
