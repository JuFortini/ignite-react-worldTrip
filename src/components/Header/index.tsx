import { Flex, Image, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BackButton } from "./BackButton";

export function Header() {

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
    </Flex>
  );
}