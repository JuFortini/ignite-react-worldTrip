import { Flex, IconButton, Image, LinkBox, LinkOverlay, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext } from "react";

import { BackButton } from "./BackButton";
import { ColorModeButtonContext } from "../../contexts/ColorModeButtonContext";

export function Header() {

  
  const { icon } = useContext(ColorModeButtonContext);
  const { toggleColorMode } = useColorMode();
  const { asPath } = useRouter();

  let isHomepage = false;

  if (asPath === "/") {
    isHomepage = true;
  }

  return (
    <Flex h={["14", "24"]} w="100%" align="center" justify="center">
      { !isHomepage && 
        <BackButton />
      }
      <Image src="logo.svg" alt="logo worldTrip" h={["6", "12"]} />
      <IconButton 
        aria-label="color mode" 
        fontSize={["md", "2xl"]} 
        icon={icon} 
        position="absolute" 
        right="0" 
        mx={["4", "16"]} 
        bg="inherit"
        cursor="pointer"
        _hover={{
          bg: "inherit",
        }}
        onClick={toggleColorMode}
      />
    </Flex>
  );
}