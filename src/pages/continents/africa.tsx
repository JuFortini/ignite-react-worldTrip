import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";


import { Header } from "../../components/Header";
import { ContinentsBanner } from "../../components/Banners/ContinentsBanner";
import { ContinentInfo } from "../../components/ContinentInfo";
import { TopCities } from "../../components/TopCities";

export default function Africa() {
  return (
    <Flex direction="column" w="100%" align="center" justify="center" mb="16">
      <Header />
      <ContinentsBanner 
        continent="África" 
        image="https://images.unsplash.com/photo-1591303872989-2640dc28185b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1481" 
        position="0 65%" 
      />
      <HStack spacing="24" px="32" py="24" w="100%" justify="space-between">
        <Box>
          <Text>A África não é exatamente uma enorme concentração de terra preenchida por savanas, elefantes, guerras civis e miséria, como muita gente pensa. Os 54 países que compõe o continente africano têm, cada um a sua maneira, charme próprio, belezas naturais, culturas e tradições. E o melhor: grande parte dessas preciosidades ainda é pouco explorada pelo turismo de massa.</Text>
          <Text>Para muito além do surf na África do Sul ou do safári no Quênia, a região esconde tesouros que se revelam inesquecíveis para quem decide viajar pelo continente sem preconceitos e medos.</Text>
        </Box>
        <Box px="12">
          <ContinentInfo 
            countries={54} 
            languages="2.092" 
            topcities={4} 
            font="Fonte: Euromonitor Internacional" 
          />
        </Box>
      </HStack>
      <TopCities />
    </Flex>
  );
}