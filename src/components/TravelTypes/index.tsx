import { Flex, Grid, GridItem, HStack, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";

import { TypeCard } from "./TypeCard";

export function TravelTypes() {

  const isLargeWindow = useBreakpointValue({
    base: false,
    md: true,
  })

  if (isLargeWindow) {
    return (
      <SimpleGrid 
        justifyContent="space-between" 
        w="80%" 
        mx={["14", "44"]} 
        mb={["9", "20"]} 
        mt={["9", "28"]}
        templateColumns="repeat(auto-fit, minmax(160px, 160px))"
        spacingY="4"
      >
        <TypeCard href="/travel-types/night-life" src="images/cocktail.png">
          vida noturna
        </TypeCard>
        <TypeCard href="/travel-types/beach" src="images/beach.png">
          praia
        </TypeCard>
        <TypeCard href="/travel-types/modern" src="images/modern.png">
          moderno
        </TypeCard>
        <TypeCard href="/travel-types/classic" src="images/classic.png">
          clássico
        </TypeCard>
        <TypeCard href="/travel-types" src="images/world.png">
          e mais ...
        </TypeCard>
      </SimpleGrid>
    ); 
  }

  return (
    <Grid
      w="80%"
      gap="4"
      mx="14"
      my="9"
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(4, 1fr)"
    >
      <GridItem colSpan={4} alignSelf="center" w="fit-content">
        <TypeCard href="/travel-types/night-life" src="images/cocktail.png">
          vida noturna
        </TypeCard>
      </GridItem>
      <GridItem colSpan={1} alignSelf="center">
        <TypeCard href="/travel-types/beach" src="images/beach.png">
          praia
        </TypeCard>
      </GridItem>
      <GridItem colSpan={4} alignSelf="center">
        <TypeCard href="/travel-types/modern" src="images/modern.png">
          moderno
        </TypeCard>
      </GridItem>
      <GridItem colSpan={1} alignSelf="center">
        <TypeCard href="/travel-types/classic" src="images/classic.png">
          clássico
        </TypeCard>
      </GridItem>
      <GridItem colSpan={5} alignSelf="center" justifySelf="center">
        <TypeCard href="/travel-types" src="images/world.png">
          e mais ...
        </TypeCard>
      </GridItem>
    </Grid>
  );
  
}