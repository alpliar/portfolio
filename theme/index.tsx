import {
  extendTheme,
  StyleFunctionProps,
  theme as baseTheme,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  semanticTokens: {
    colors: {
      primary: { _light: "red", _dark: "blue" },
      //   "chakra-body-text": { _light: "red", _dark: "blue" },
      //   "chakra-placeholder-color": { _light: "blue" },
    },
  },
});

export default theme;
