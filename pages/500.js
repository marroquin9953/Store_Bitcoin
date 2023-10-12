import { Flex, Heading } from '@chakra-ui/react';

export default function UnhandledError() {
  return (
    <Flex align="center" justify="center" height="100%">
      <Heading textAlign="center" as="h1" variant="category" mb={2}>
        500 | Algo salió mal.
      </Heading>
    </Flex>
  );
}
