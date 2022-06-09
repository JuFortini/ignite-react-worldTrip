import { Box, Flex, Heading } from "@chakra-ui/react";

interface ContinentsBannerProps {
  image: string;
  position: string;
  continent: string;
}

export function ContinentsBanner({ image, position, continent }: ContinentsBannerProps) {
  return (
    <Box 
        h={["10rem", "31rem"]}
        bgImage={image}
        bgRepeat="no-repeat"
        bgPosition={position}
        bgColor="rgba(0, 0, 0, 0.3)"
        bgBlendMode="darken"
        bgSize="cover"
        w="100%"
      >
        <Flex mx={["0", "8rem"]} my={["0", "6rem"]} h={["calc(10rem - (2 * 0rem))", "calc(31rem - (2 * 6rem))"]} align={["center", "end"]} justify={["center", "flex-start"]}>
          <Heading color="gray.50" fontSize={["3xl","5xl"]} fontWeight="semibold">{continent}</Heading>
        </Flex>
      </Box>
  );
}