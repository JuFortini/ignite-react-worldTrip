import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";

export function TypesBanner() {
  return (
    <Box 
      h="96"
      bgImage="https://images.unsplash.com/photo-1530907487668-af02f65b4afe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
      bgPosition="0 15%"
      bgColor="blackAlpha.500"
      bgBlendMode="darken"
      w="100%"
    >
      <Flex justify="center" my="40">
        <Heading fontSize="5xl" color="gray.50" fontWeight="medium">Escolha seu tipo</Heading>
      </Flex>
    </Box>
  );
}