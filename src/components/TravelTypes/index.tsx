import { HStack } from "@chakra-ui/react";

import { TypeCard } from "./TypeCard";

export function TravelTypes() {
  return (
    <HStack justify="space-between" w="80%" mx="44" mb="20" mt="28">
      <TypeCard href="#" src="images/cocktail.png">
        vida noturna
      </TypeCard>
      <TypeCard href="#" src="images/beach.png">
        praia
      </TypeCard>
      <TypeCard href="#" src="images/modern.png">
        moderno
      </TypeCard>
      <TypeCard href="#" src="images/classic.png">
        clássico
      </TypeCard>
      <TypeCard href="#" src="images/world.png">
        e mais ...
      </TypeCard>
    </HStack>
  );
}