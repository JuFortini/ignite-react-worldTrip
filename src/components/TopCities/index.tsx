import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";
import { TopCitiesCard } from "./TopCitiesCard";

export function TopCities() {
  return (
    <Box w="100%" px="32">
      <Heading mb="12" fontWeight="medium">Cidades +100</Heading>
      <Flex>
        <TopCitiesCard 
          image="https://images.unsplash.com/photo-1553913861-c0fddf2619ee?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
          city="Cairo"
          country="Egito"
          countryInitials="EG" 
        />
      </Flex>
    </Box>
  )
}