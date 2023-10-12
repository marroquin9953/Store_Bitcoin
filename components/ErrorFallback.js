import { Flex, Heading } from '@chakra-ui/react';

export function ErrorFallback() {
  return (
    <Flex align="center" justify="center" height="100%">
      <Heading textAlign="center" as="h1" variant="category" mb={2}>
      Huy! Algo salió mal. Intente recargar la página.
      </Heading>
    </Flex>
  );
}
