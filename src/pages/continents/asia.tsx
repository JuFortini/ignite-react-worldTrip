import { useEffect, useState } from "react";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { ContinentsBanner } from "../../components/Banners/ContinentsBanner";
import { ContinentInfo } from "../../components/ContinentInfo";
import { TopCities } from "../../components/TopCities";
import { api } from "../../services/api";

export default function Asia() {

  const [cities, setCities] = useState([]);

  useEffect(() => {

    async function getCities() {
      const response = await api.get("cities");
      const continentCities = response.data.filter(continentCity => {
        return continentCity.continent === "Ásia";
      })
      setCities([...continentCities]);
    }

    getCities();
  }, []);

  return (
    <Flex direction="column" w="100%" align="center" justify="center" mb="16">
      <Header />
      <ContinentsBanner 
        continent="Ásia" 
        image="https://images.unsplash.com/photo-1542640244-7e672d6cef4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
        position="0 40%" 
      />
      <HStack spacing="32" px="32" py="24" w="100%" justify="space-between">
        <Box>
          <Text>A Ásia é um continente vasto, cuja área corresponde a cerca de um terço de todas as terras emersas do mundo. Além da extensão territorial, a população total alcança a marca impressionante de mais de 4 bilhões, o que é quase 50% de todos os habitantes do globo.</Text>
          <Text>Sinônimo de imensidão e diversidade. A região é enorme, apresentando destinos entre os mais incríveis de todo o mundo, com paisagens de tirar o fôlego, praias e mares de beleza ímpar, rica cultura, templos milenares, inabalável culto à religião, ilhas paradisíacas, gastronomia única e exótica.</Text>
          <Text>O que não falta são opções e atrações surpreendentes para você conhecer. Se está pensando em viajar e conhecer alguns destinos asiáticos, saiba que vai viver uma experiência muito rica e inesquecível.</Text>
        </Box>
        <Box>
          <ContinentInfo 
            countries={50} 
            languages="2.036" 
            topcities={cities.length} 
            font="Fonte: Euromonitor Internacional e Gama Traduções e Interpretações" 
          />
        </Box>
      </HStack>
      <TopCities continent="Ásia" />
    </Flex>
  );
}