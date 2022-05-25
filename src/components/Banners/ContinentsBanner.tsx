import { Box, Flex, Heading } from "@chakra-ui/react";

interface ContinentsBannerProps {
  image: string;
  position: string;
  continent: string;
}

export function ContinentsBanner({ image, position, continent }: ContinentsBannerProps) {
  return (
    <Box 
        h="31rem"
        bgImage={image}
        bgRepeat="no-repeat"
        bgPosition={position}
        bgColor="rgba(0, 0, 0, 0.3)"
        bgBlendMode="darken"
        bgSize="cover"
        w="100%"
      >
        <Flex mx="8rem" my="6rem" h="calc(31rem - (2 * 6rem))" align="end">
          <Heading color="gray.50" fontSize="5xl" fontWeight="semibold">{continent}</Heading>
        </Flex>
      </Box>
  );
}