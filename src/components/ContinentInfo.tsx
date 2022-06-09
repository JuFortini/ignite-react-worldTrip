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
    <Flex mt={["6", "12"]} mb="6" align="flex-end">
      <HStack spacing={["6", "12"]}>
        <Flex direction="column" align="center">
          <Heading fontSize={["2xl", "5xl"]} fontWeight="semibold" color="yellow.400">{countries}</Heading>
          <Text fontSize={["lg", "xl"]} fontWeight={["medium", "semibold"]}>países</Text>
        </Flex>
        <Flex direction="column" align="center">
          <Heading fontSize={["2xl", "5xl"]} fontWeight="semibold" color="yellow.400">{languages}</Heading>
          <Text fontSize={["lg", "xl"]} fontWeight={["medium", "semibold"]}>línguas</Text>
        </Flex>
        <Flex direction="column" align="center">
          <Heading fontSize={["2xl", "5xl"]} fontWeight="semibold" color="yellow.400">{topcities}</Heading>
          <Text fontSize={["lg", "xl"]} fontWeight={["medium", "semibold"]} whiteSpace="nowrap" mr="2">cidades +100</Text>
        </Flex>
      </HStack>
      <Tooltip hasArrow label={font} bg="gray.100" color="gray.500">
        <Box mb="2" color="gray.300"><HiOutlineInformationCircle /></Box>
      </Tooltip>
    </Flex>
  );
}