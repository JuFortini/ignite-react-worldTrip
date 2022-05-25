import { Box, Flex, Heading, HStack, Text, Tooltip } from "@chakra-ui/react";
import { HiOutlineInformationCircle } from "react-icons/hi";

interface ContinentInfoProps {
  countries: number;
  languages: string;
  topcities: number;
  font: string;
}

export function ContinentInfo({ countries, languages, topcities, font }: ContinentInfoProps) {
  return (
    <HStack spacing="12">
      <Flex direction="column" align="center">
        <Heading fontSize="40" fontWeight="semibold" color="yellow.400">{countries}</Heading>
        <Text fontSize="xl" fontWeight="semibold">países</Text>
      </Flex>
      <Flex direction="column" align="center">
        <Heading fontSize="40" fontWeight="semibold" color="yellow.400">{languages}</Heading>
        <Text fontSize="xl" fontWeight="semibold">línguas</Text>
      </Flex>
      <Flex direction="column" align="center">
        <Heading fontSize="40" fontWeight="semibold" color="yellow.400">{topcities}</Heading>
        <Flex align="center">
          <Text fontSize="xl" fontWeight="semibold" whiteSpace="nowrap" mr="2">cidades +100</Text>
          <Tooltip hasArrow label={font} bg="gray.100" color="gray.500">
            <Box color="gray.300"><HiOutlineInformationCircle /></Box>
          </Tooltip>
        </Flex>
      </Flex>
    </HStack>
  );
}