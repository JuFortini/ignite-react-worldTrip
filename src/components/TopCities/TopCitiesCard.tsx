import { Box, Flex, Image, Text } from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";

interface TopCitiesCardProps {
  image: string,
  city: string,
  country: string,
  countryInitials: string,
}

export function TopCitiesCard({ image, city, country, countryInitials }: TopCitiesCardProps) {
  return (
    <Box>
      <Image 
        fit="cover" 
        w="64" 
        h="44" 
        src={image} 
        borderTopRadius="4px"
      />
      <Flex
        borderX="1px"
        borderColor="yellow.100"
        borderBottom="1px"
        borderBottomRadius="4px"
        borderBottomColor="yellow.100"
        justify="space-between"
        align="center"
        px="6"
        pt="6"
        pb="8"
      >
        <Box>
          <Text fontSize="xl" fontWeight="semibold" fontFamily="Barlow">{city}</Text>
          <Text fontSize="md" fontWeight="medium" color="gray.300" fontFamily="Barlow">{country}</Text>
        </Box>
        <ReactCountryFlag
          countryCode={countryInitials}
          svg
          cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
          cdnSuffix="svg"
          title={countryInitials}
          style={{
            width: "2rem",
            height: "2rem",
            borderRadius: "50%",
          }}
        />
      </Flex>
    </Box>
  );
}