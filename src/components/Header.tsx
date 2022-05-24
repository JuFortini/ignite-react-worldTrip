import { Flex, Image, LinkBox, LinkOverlay } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex h="24" align="center" justify="center">
      <LinkBox>
        <LinkOverlay href="/">
          <Image src="logo.svg" h="12" />
        </LinkOverlay>
      </LinkBox>
    </Flex>
  );
}