import { HStack } from "@chakra-ui/react";

import { TypeCard } from "./TypeCard";

export function TravelTypes() {
  return (
    <HStack justify="space-between" w="80%" mx="44" mb="20" mt="28">
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
    </HStack>
  );
}