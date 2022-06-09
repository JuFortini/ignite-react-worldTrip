import { Flex, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { TypesBanner } from "../../components/Banners/TypesBanner";
import { CityTypeCard } from "../../components/CityTypeCard";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

interface CityProps {
  id: number;
  city: string;
  image: string;
  country: string;
  countryInicials: string;
  continent: string;
}

export default function Snow() {

  const [cities, setCities] = useState<CityProps[]>([]);

  useEffect(() => {
    api.get("/types").then(city => setCities(city.data.cold))
  }, [])

  return (
    <Flex direction="column" w="100%" align="center" justify="center" mb="16">
      <Header />
      <TypesBanner 
        bgImage="https://images.unsplash.com/photo-1542601098-8fc114e148e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
        bgPosition="0% 50%"
        title="Neve" 
      />
      <SimpleGrid  
        w="100%"
        mt={["8", "16", "24", "32"]}
        px={["6", "16", "32", "40"]}  
        templateColumns="repeat(auto-fit, minmax(550px, 550px))"
        justifyContent="space-between"
        spacingY="12"
      >
        {cities.map(city => {
          return (
            <CityTypeCard 
              key={city.id} 
              image={city.image} 
              city={city.city} 
              country={city.country} 
              countryInicials={city.countryInicials} 
              continent={city.continent} 
            />
          )
        })}
      </SimpleGrid>
    </Flex>
  );
}