import { Box, Heading, HStack, Image, Stack, Text, useBreakpointValue } from "@chakra-ui/react";

export function HomeBanner() {

  const isLargeWindow = useBreakpointValue({
    base: false,
    md: true,
  })

  return (
    <Box 
      h={["40", "60", "96"]}
      bgImage="https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1906"
      bgPosition="0 30%"
      w="100%"
    >
      <HStack justify="space-between" mx={["8", "14", "44"]} my={["7", "9"]}>
        <Stack w="28rem" spacing={["2", "8"]}>
          <Heading color="gray.50" fontWeight="medium" fontSize={["xl", "4xl"]}>5 Continentes, infinitas possibilidades.</Heading>
          <Text color="gray.50" fontWeight="light" fontSize={["sm", "md"]}>Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
        </Stack>
        { isLargeWindow && 
          <Image position="relative" top="16" src="airplane.svg" h="80" transform="rotate(5deg)" />
        }
      </HStack>
    </Box>
  );
}