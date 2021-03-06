import { extendTheme, propNames, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

export const theme = extendTheme({
  config,
  colors: {
    gray: {
      "900": "#151819",
      "800": "#2A3133",
      "700": "#3F4F4D",
      "600": "#47585B",
      "500": "#647275",
      "400": "#969799",
      "300": "#AFB1B3",
      "200": "#C8CACC",
      "100": "#E1E3E6",
      "50": "#F5F8FA",
    },
    yellow: {
      "900": "#4F3902",
      "800": "#755402",
      "700": "#A37503",
      "600": "#BF8A06",
      "500": "#E6A607",
      "400": "#FFBA08",
      "300": "#FCC63A",
      "200": "#FAD064",
      "100": "#FCDD8D",
      "50": "#FFECBA",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'whiteAlpha.100' : 'gray.50',
        color: props.colorMode === 'dark' ? "gary.50" : "gray.600"

      },
      link: {
        decoration: "none"
      }
    })
  }
})