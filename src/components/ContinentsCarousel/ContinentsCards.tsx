import { Flex, Heading, Stack, Text } from "@chakra-ui/react";

interface ContinentsCardsProps {
  image: string,
  position: string,
  continent: string,
  description: string,
}

export function ContinentsCards({ image, position, continent, description }: ContinentsCardsProps) {
  return (
    <Flex
      h="28rem"
      justify="center"
      align="center"
      bgImage={image}
      bgColor="rgba(0, 0, 0, 0.5)"
      bgBlendMode="darken"
      bgPosition={position}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Stack spacing="6" align="center">
        <Heading color="gray.50" fontSize="5xl">{continent}</Heading>
        <Text color="gray.50" fontWeight="bold" fontSize="xl">{description}</Text>
      </Stack>
    </Flex>
  );
}