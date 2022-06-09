import { useEffect, useState } from "react";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { ContinentsBanner } from "../../components/Banners/ContinentsBanner";
import { ContinentInfo } from "../../components/ContinentInfo";
import { TopCities } from "../../components/TopCities";
import { api } from "../../services/api";

export default function NorthAmerica() {

  const [cities, setCities] = useState([]);

  useEffect(() => {

    async function getCities() {
      const response = await api.get("cities");
      const continentCities = response.data.filter(continentCity => {
        return continentCity.continent === "América do Norte";
      })
      setCities([...continentCities]);
    }

    getCities();
  }, []);

  return (
    <Flex direction="column" w="100%" align="center" justify="center" mb="16">
      <Header />
      <ContinentsBanner 
        continent="América do Norte" 
        image="https://images.unsplash.com/photo-1546436836-07a91091f160?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80" 
        position="0 40%" 
      />
      <Flex 
        direction={["column", "column", "column", "column", "row"]} 
        align="center" 
        px={["4", "32"]} 
        py={["6", "24"]} 
        w="100%" 
        justify="space-between"
      >
        <Box mr={["0","0", "0", "0", "32"]} fontSize={["sm", "md", "lg"]} textAlign="justify">
          <Text>O turismo na América do Norte é como um grande e variado cardápio. Há opções de cidades urbanas e cosmopolitas, desérticas, nevadas, outras para quem gosta de sossego, de baladas, de parques de diversão, de turismo de aventura.</Text>
          <Text>A oferta é tão grande quando o tamanho do continente, que tem mais de 27,9 milhões de km². Até por isso, viajar para um dos países da América do Norte, ou para todos, é o sonho de consumo de muitos viajantes de todo o mundo. Tanto que, em qualquer época do ano, é bem fácil ouvir os mais diferentes idiomas e sotaques em qualquer cidade dos países que fazem parte dessa região.</Text>
        </Box>
        <Box>
          <ContinentInfo 
            countries={3} 
            languages="605" 
            topcities={cities.length} 
            font="Fonte: Euromonitor Internacional e Gama Traduções e Interpretações" 
          />
        </Box>
      </Flex>
      <TopCities continent="América do Norte" />
    </Flex>
  );
}