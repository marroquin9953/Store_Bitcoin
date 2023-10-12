import { Heading, VStack } from '@chakra-ui/react';
import Text from 'components/Text';

export const Empty = () => (
  <VStack align="left">
    <Heading variant="headlineBig">Añade tu primer producto</Heading>
    <Text>
    Agregue artículos físicos, servicios o cualquier otra cosa que planee vender.
    </Text>
  </VStack>
);
