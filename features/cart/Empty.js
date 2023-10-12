import { Heading, VStack } from '@chakra-ui/react';
import Text from 'components/Text';

export const Empty = () => (
  <VStack align="left">
    <Heading variant="headlineBig">Su inventario de productos está vacío</Heading>
    <Text>Vaya a la página de inicio y agregue su primer producto para comenzar.</Text>
  </VStack>
);
