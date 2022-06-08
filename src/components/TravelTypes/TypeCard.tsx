import { ReactNode } from "react";
import { LinkBox, Image, LinkOverlay, Heading, Flex, useBreakpointValue, Icon, Box } from "@chakra-ui/react";
import { GoPrimitiveDot } from "react-icons/go";

interface TypeCardProps {
  src: string,
  href: string,
  children: ReactNode,
}

export function TypeCard({ src, href, children }: TypeCardProps) {

  const isLargeWindow = useBreakpointValue({
    base: false,
    md: true,
  });

  if (isLargeWindow) {
    return (
      <LinkBox w="40">
        <Flex direction={"column"} align="center">
          <Image src={src} boxSize="28" mb="8" />
          <LinkOverlay href={href}>
            <Heading fontSize="lg" fontWeight="bold">{children}</Heading>
          </LinkOverlay>
        </Flex>
      </LinkBox>
    );
  }

  return (
    <LinkBox>
      <Flex>
        <Icon as={GoPrimitiveDot} color="yellow.400" mr="2" />
        <LinkOverlay href={href}>
          <Heading fontSize="large" fontWeight="medium">{children}</Heading>
        </LinkOverlay>
      </Flex>
    </LinkBox>
  );
}