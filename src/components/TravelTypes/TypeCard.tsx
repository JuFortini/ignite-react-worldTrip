import { ReactNode } from "react";
import { LinkBox, Image, LinkOverlay, Heading, Flex, useBreakpointValue, Icon, Box } from "@chakra-ui/react";
import { GoPrimitiveDot } from "react-icons/go";
import Router, { useRouter } from "next/router";

interface TypeCardProps {
  src: string,
  href: string,
  children: ReactNode,
}

export function TypeCard({ src, href, children }: TypeCardProps) {

  const { asPath } = useRouter();

  const isLargeWindow = useBreakpointValue({
    base: false,
    md: true,
  });

  let isHomepage = false;

  if (asPath === "/") {
    isHomepage = true
  }

  if (isLargeWindow || !isHomepage) {
    return (
      <LinkBox w={["28", "28", "40"]}>
        <Flex direction="column" align="center">
          <Image src={src} boxSize={["20", "20", "28"]} mb={["6", "8"]} />
          <LinkOverlay href={href}>
            <Heading fontSize={["md", "md", "lg"]} fontWeight="bold">{children}</Heading>
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