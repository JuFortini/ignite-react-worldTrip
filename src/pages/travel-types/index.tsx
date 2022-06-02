import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { TravelTypesBanner } from "../../components/Banners/TravelTypesBanner";
import { Header } from "../../components/Header";
import { TypeCard } from "../../components/TravelTypes/TypeCard";

export default function TravelTypes() {
  return (
    <Flex direction="column" w="100%" align="center" justify="center" mb="28">
      <Header />
      <TravelTypesBanner />
      <SimpleGrid
        mt="32"
        px="32"
        w="100%"
        templateColumns="repeat(auto-fit, minmax(230px, 230px))"
        justifyContent="space-between"
        spacingY="12"
      >
        <TypeCard href="/travel-types/adventure" src="/images/adventure.png">aventura</TypeCard>
        <TypeCard href="/travel-types/classic" src="/images/classic.png">clássico</TypeCard>
        <TypeCard href="/travel-types/food" src="/images/food.png">comida</TypeCard>
        <TypeCard href="/travel-types/cruise" src="/images/cruise.png">cruzeiro</TypeCard>
        <TypeCard href="/travel-types/modern" src="/images/modern.png">moderno</TypeCard>
        <TypeCard href="/travel-types/snow" src="/images/cold.png">neve</TypeCard>
        <TypeCard href="/travel-types/beach" src="/images/beach.png">praia</TypeCard>
        <TypeCard href="/travel-types/romantic" src="/images/romantic.png">romântico</TypeCard>
        <TypeCard href="/travel-types/night-life" src="/images/cocktail.png">vida noturna</TypeCard>
      </SimpleGrid>
    </Flex>
  );
}