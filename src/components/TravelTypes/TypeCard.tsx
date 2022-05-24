import { LinkBox, Image, LinkOverlay, Heading, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface TypeCardProps {
  src: string,
  href: string,
  children: ReactNode,
}

export function TypeCard({ src, href, children }: TypeCardProps) {
  return (
    <LinkBox>
      <Flex direction="column" align="center">
        <Image src={src} boxSize="28" mb="8" />
        <LinkOverlay href={href}>
          <Heading fontSize="lg">{children}</Heading>
        </LinkOverlay>
      </Flex>
    </LinkBox>
  );
}