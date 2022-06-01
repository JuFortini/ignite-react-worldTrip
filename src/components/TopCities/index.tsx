import { useEffect, useState } from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

import { TopCitiesCard } from "./TopCitiesCard";
import { api } from "../../services/api";

interface CityProps {
  id: number;
  city: string;
  image: string;
  country: string;
  countryInicials: string;
  continent: string;
}

export function TopCities() {

  const [cities, setCities] = useState<CityProps[]>([]);

  useEffect(() => {
    api.get("cities").then(response => {
      const cities = response.data.filter((city: CityProps) => {
        return city.continent === "África";
      })
      setCities([...cities]);
    })
  }, []);

  return (
    <Box w="100%" px="32">
      <Heading mb="12" fontWeight="medium">Cidades +100</Heading>
      <SimpleGrid 
        templateColumns="repeat(auto-fit, minmax(256px, 256px))"
        justifyContent="space-between"
        spacingY="12"
        
      >
        {cities.map(city => {
          return (
            <TopCitiesCard 
              key={city.id}
              image={city.image}
              city={city.city}
              country={city.country}
              countryInitials={city.countryInicials} 
            />
          )
        })}
      </SimpleGrid>
    </Box>
  )
}