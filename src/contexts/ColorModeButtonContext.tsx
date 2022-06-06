import { createContext, ReactNode } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { IconType } from "react-icons";

interface ColorModeButtonProviderProps {
  children: ReactNode;
}

interface ColorModeButtonContextProps {
  icon:  IconType;
}

export const ColorModeButtonContext = createContext({} as ColorModeButtonContextProps);

export function ColorModeButtonProvider({ children }: ColorModeButtonProviderProps) {

  const icon = useColorModeValue(HiOutlineMoon, HiOutlineSun);

  return (
    <ColorModeButtonContext.Provider value={{ icon }}>
     {children}
    </ColorModeButtonContext.Provider>
  )
}