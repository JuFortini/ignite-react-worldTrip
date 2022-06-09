import { Box, Heading, Stack } from "@chakra-ui/react";

interface TypesBannerProps {
  bgImage: string;
  bgPosition: string;
  title: string;
}

export function TypesBanner({ bgImage, bgPosition, title }: TypesBannerProps) {
  return (
    <Box 
      h={["40", "60", "96"]}
      bgImage={bgImage}
      bgPosition={bgPosition}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgColor="blackAlpha.500"
      bgBlendMode="darken"
      w="100%"
    >
      <Stack spacing={["4", "4", "6", "6"]} mx={["6", "24", "44", "60"]} my={["8", "20", "28", "48"]}>
        <Heading fontSize={["2xl", "3xl", "5xl"]} color="gray.50" fontWeight="medium">{title}</Heading>
      </Stack>
    </Box>
  );
}