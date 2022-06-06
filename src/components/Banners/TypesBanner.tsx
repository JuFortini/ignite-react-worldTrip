import { Box, Heading, Stack } from "@chakra-ui/react";

interface TypesBannerProps {
  bgImage: string;
  bgPosition: string;
  title: string;
}

export function TypesBanner({ bgImage, bgPosition, title }: TypesBannerProps) {
  return (
    <Box 
      h="96"
      bgImage={bgImage}
      bgPosition={bgPosition}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgColor="blackAlpha.500"
      bgBlendMode="darken"
      w="100%"
    >
      <Stack spacing="6" ml="60" my="60">
        <Heading fontSize="5xl" color="gray.50" fontWeight="medium">{title}</Heading>
      </Stack>
    </Box>
  );
}