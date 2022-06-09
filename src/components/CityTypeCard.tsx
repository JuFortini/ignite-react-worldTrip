import { Box, Flex, Image, Text } from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";

interface CityTypeCardProps {
  image: string;
  city: string;
  country: string;
  countryInicials: string;
  continent: string;
}

export function CityTypeCard({ image, city, country, countryInicials, continent }: CityTypeCardProps) {
  return (
    <Flex w={["160px", "160px", "240px", "550px"]}>
      <Image  
        src={image} 
        w={["180px", "180px", "180px", "280px"]}
        h={["180px", "180px", "180px", "220px"]}
        objectFit="cover"
        borderLeftRadius="6px"
      />
      <Box 
        borderRight="4px" 
        borderRightWidth="1px" 
        borderRightColor="yellow.200"
        borderRightRadius="6px" 
        borderTopWidth="1px" 
        borderTopColor="yellow.200"
        borderBottomWidth="1px"
        borderBottomColor="yellow.200"
      >
        <Flex w="100%" direction="column" justify="space-between" px={["4", "4", "10"]} py={["6", "6", "10"]} h="100%">
          <Text fontSize={["xl", "3xl"]} lineHeight="8" fontWeight="semibold" fontFamily="Barlow" mb="4">{city}</Text>
          <Flex w={["32", "52"]} justify="space-between" align="center">
            <Box>
              <Text fontSize={["md", "lg"]} fontWeight="medium" color="gray.400" fontFamily="Barlow">{country}</Text>
              <Text fontSize={["xs", "sm"]} fontWeight="medium" color="gray.300" fontFamily="Barlow">{continent}</Text>
            </Box>
            <ReactCountryFlag
              countryCode={countryInicials}
              svg
              cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
              cdnSuffix="svg"
              style={{
                width: "2rem",
                height: "2rem",
                borderRadius: "50%",
              }}
            />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}