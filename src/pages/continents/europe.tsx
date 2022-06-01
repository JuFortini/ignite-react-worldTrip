import { useEffect, useState } from "react";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { ContinentsBanner } from "../../components/Banners/ContinentsBanner";
import { ContinentInfo } from "../../components/ContinentInfo";
import { TopCities } from "../../components/TopCities";
import { api } from "../../services/api";

export default function Europe() {

  const [cities, setCities] = useState([]);

  useEffect(() => {

    async function getCities() {
      const response = await api.get("cities");
      const continentCities = response.data.filter(continentCity => {
        return continentCity.continent === "Europa";
      })
      setCities([...continentCities]);
    }

    getCities();
  }, []);

  return (
    <Flex direction="column" w="100%" align="center" justify="center" mb="16">
      <Header />
      <ContinentsBanner 
        continent="Europa" 
        image="https://images.unsplash.com/photo-1639341267320-2d062b250c0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1858&q=80" 
        position="0 45%" 
      />
      <HStack spacing="32" px="32" py="24" w="100%" justify="space-between">
        <Box>
          <Text>O turismo na Europa é como uma aula de história, mas que ainda está sendo escrita. Isso porque, embora os países do chamado “Velho Continente” tenham registros de habitantes datados de 35.000 a. C., foram palco de guerras no passado e também da invenção de objetos, do debate de grandes ideias, e de muitos outros acontecimentos, há sempre novidades. A história não para de acontecer na Europa.</Text>
          <Text>Além da questão cultural, que pode ser vista nos museus, monumentos e nas ruas por todo o continente, a Europa tem paisagens fantásticas e muito diversas. Há cenários urbanos, campos de flores, regiões de lagos, montanhas, fiordes e muito mais.</Text>
          <Text>Por tudo isso é que estão na Europa algumas das cidades mais charmosas e turísticas do mundo e quem agradam a qualquer tipo de viajante.</Text>
        </Box>
        <Box>
          <ContinentInfo 
            countries={50} 
            languages="289" 
            topcities={cities.length} 
            font="Fonte: Euromonitor Internacional e Gama Traduções e Interpretações" 
          />
        </Box>
      </HStack>
      <TopCities continent="Europa" />
    </Flex>
  );
}