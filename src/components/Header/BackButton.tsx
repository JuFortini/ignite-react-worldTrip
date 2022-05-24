import { Flex, IconButton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/io";

export function BackButton() {

  const { back } = useRouter();

  return (
    <Flex position="absolute" w="80%" align="start">
      <IconButton 
        icon={<IoIosArrowBack fontSize="20" />} 
        aria-label="voltar" 
        color="gray.600" 
        bg="gray.50" 
        onClick={back}
        _hover={{
          bg:"gray.50"
        }}
      />
    </Flex>
  );
}