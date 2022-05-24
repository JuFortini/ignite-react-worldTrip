import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import { ContinentsCarousel } from "../components/ContinentsCarousel";
import { Header } from "../components/Header";
import { HomeBanner } from "../components/HomeBanner";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <Flex direction="column" w="100%" align="center" justify="center" mb="16">
      <Header />
      <HomeBanner />
      <TravelTypes />
      <Divider w="20" h="1.5px" bg="gray.900" />
      <Flex direction="column" align="center" my="20">
        <Heading fontWeight="medium">Vamos nessa?</Heading>
        <Heading fontWeight="medium">Então escolha seu continente</Heading>
      </Flex>
      <ContinentsCarousel />
    </Flex>
  )
}
