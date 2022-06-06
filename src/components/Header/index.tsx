import { Flex, IconButton, Image, LinkBox, LinkOverlay, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext } from "react";

import { BackButton } from "./BackButton";
import { ColorModeButtonContext } from "../../contexts/ColorModeButtonContext";

export function Header() {

  const { icon } = useContext(ColorModeButtonContext)
  const { colorMode, toggleColorMode } = useColorMode();
  const { asPath } = useRouter();

  let isHomepage = false;

  if (asPath === "/") {
    isHomepage = true;
  }

  return (
    <Flex h="24" w="100%" align="center" justify="center">
      { !isHomepage && 
        <BackButton />
      }
      <LinkBox>
        <LinkOverlay href="/">
          <Image src="/logo.svg" h="12" />
        </LinkOverlay>
      </LinkBox>
      <IconButton 
        aria-label="color mode" 
        size="sm" as={icon} 
        position="absolute" 
        right="0" 
        mx="16" 
        bg="inherit"
        cursor="pointer"
        _hover={{
          bg: "inherit"
        }}
        onClick={toggleColorMode}
      >{colorMode === "light" ? "Dark" : "Light"}</IconButton>
    </Flex>
  );
}