import { useEffect, useState } from "react";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { ContinentsBanner } from "../../components/Banners/ContinentsBanner";
import { ContinentInfo } from "../../components/ContinentInfo";
import { TopCities } from "../../components/TopCities";
import { api } from "../../services/api";

export default function Oceania() {

  const [cities, setCities] = useState([]);

  useEffect(() => {

    async function getCities() {
      const response = await api.get("cities");
      const continentCities = response.data.filter(continentCity => {
        return continentCity.continent === "Oceania";
      })
      setCities([...continentCities]);
    }

    getCities();
  }, []);

  return (
    <Flex direction="column" w="100%" align="center" justify="center" mb="16">
      <Header />
      <ContinentsBanner 
        continent="Oceania" 
        image="https://images.unsplash.com/photo-1531804226530-70f8004aa44e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
        position="0 65%" 
      />
      <HStack spacing="32" px="32" py="24" w="100%" justify="space-between">
        <Box>
          <Text>Uma das curiosidades da Oceania é que esse continente já foi tratado como o “fim do mundo”, devido à distância da Europa e das Américas. A sorte (nossa!), é claro, é que hoje em dia há diversas rotas para o continente. O que faz com que o turismo na Oceania seja super viável e não pare de crescer.</Text>
          <Text>Esse crescimento também é “culpa” da descoberta das paisagens paradisíacas existentes por muitos viajantes, que voltam do continente simplesmente anestesiados com tamanha beleza. Dessa forma, a Oceania é um dos destinos mais procurados por turistas de todo o mundo.</Text>
          <Text>A Oceania é formada por 20 mil ilhas e atóis. No total, a região tem 9 milhões de km² de paisagens paradisíacas, tradições de civilizações aborígenes e cultura europeia, e cidades cheias de atrativos. Veja neste artigo os principais destinos turísticos da Oceania, que inclui países e regiões em um mapa turístico exótico, com algumas nações com economia forte e estável.</Text>
        </Box>
        <Box>
          <ContinentInfo 
            countries={16} 
            languages="1.323" 
            topcities={cities.length} 
            font="Fonte: Euromonitor Internacional e Gama Traduções e Interpretações" 
          />
        </Box>
      </HStack>
      <TopCities continent="Oceania" />
    </Flex>
  );
}