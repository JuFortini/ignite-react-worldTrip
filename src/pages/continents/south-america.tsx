import { useEffect, useState } from "react";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { ContinentsBanner } from "../../components/Banners/ContinentsBanner";
import { ContinentInfo } from "../../components/ContinentInfo";
import { TopCities } from "../../components/TopCities";
import { api } from "../../services/api";

export default function SouthAmerica() {

  const [cities, setCities] = useState([]);

  useEffect(() => {

    async function getCities() {
      const response = await api.get("cities");
      const continentCities = response.data.filter(continentCity => {
        return continentCity.continent === "América do Sul";
      })
      setCities([...continentCities]);
    }

    getCities();
  }, []);

  return (
    <Flex direction="column" w="100%" align="center" justify="center" mb="16">
      <Header />
      <ContinentsBanner 
        continent="América do Sul" 
        image="https://images.unsplash.com/photo-1633421332483-1aa89f0c6b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" 
        position="0 50%" 
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
          <Text>O turismo na América do Sul é bem variado. Afinal, o continente de mais de 17,8 milhões de km² tem uma grande variedade de paisagens, climas e estilos em cada um dos países que o formam. Por isso, fazer turismo no continente sul-americano agrada a qualquer tipo de viajante, desde aquele que prefere praias de mar azul cristalino a aqueles que buscam paisagens de deserto ou mesmo esquiar na neve.</Text>
          <Text>Vale lembrar que os países têm muita história para contar que datam de bem antes da chegada dos conquistadores portugueses e espanhóis ao continente. Por todo território há vestígios da vida dos indígenas e de outras civilizações que moravam na região, como os Incas, além das influências europeias. Tudo isso, aliado às belas paisagens naturais sul-americanas transformaram a região em um grande polo turístico visitado por viajantes de todo o mundo.</Text>
        </Box>
        <Box>
          <ContinentInfo 
            countries={12} 
            languages="456" 
            topcities={cities.length} 
            font="Fonte: Euromonitor Internacional e Gama Traduções e Interpretações" 
          />
        </Box>
      </Flex>
      <TopCities continent="América do Sul" />
    </Flex>
  );
}