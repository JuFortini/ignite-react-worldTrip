import { Box, Heading, Stack, Text } from "@chakra-ui/react";

export function TravelTypesBanner() {
  return (
    <Box 
      h={["40", "60", "96"]}
      bgImage="https://images.unsplash.com/photo-1482398650355-d4c6462afa0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      bgPosition="0 45%"
      bgSize="cover"
      bgColor="blackAlpha.600"
      bgBlendMode="darken"
      w="100%"
    >
      <Stack spacing={["4", "4", "6", "6"]} mx={["6", "24", "44", "60"]} my={["8", "20", "28", "48"]}>
        <Heading fontSize={["2xl", "3xl", "5xl"]} color="gray.50" fontWeight="medium">Escolha seu tipo</Heading>
        <Text fontWeight="light" fontSize={["sm", "sm", "md"]} color="gray.50">Baseado no seu estilo de vida, nós temos as melhores sugestões para você.</Text>
      </Stack>
    </Box>
  );
}