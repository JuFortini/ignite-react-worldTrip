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
        mt={["16", "16","32"]}
        px={["8", "12", "32"]}
        w="100%"
        templateColumns={["repeat(auto-fit, minmax(112px, 120px))", "repeat(auto-fit, minmax(112px, 120px))", "repeat(auto-fit, minmax(160px, 230px))"]}
        justifyContent={["center", "space-between"]}
        spacingY="12"
        spacingX="6"
      >
        <TypeCard href="/travel-types/adventure" src="/images/adventure.png">aventura</TypeCard>
        <TypeCard href="/travel-types/classic" src="/images/classic.png">clássico</TypeCard>
        <TypeCard href="/travel-types/gastronomic" src="/images/food.png">gastronômico</TypeCard>
        <TypeCard href="/travel-types/modern" src="/images/modern.png">moderno</TypeCard>
        <TypeCard href="/travel-types/snow" src="/images/cold.png">neve</TypeCard>
        <TypeCard href="/travel-types/beach" src="/images/beach.png">praia</TypeCard>
        <TypeCard href="/travel-types/romantic" src="/images/romantic.png">romântico</TypeCard>
        <TypeCard href="/travel-types/night-life" src="/images/cocktail.png">vida noturna</TypeCard>
      </SimpleGrid>
    </Flex>
  );
}