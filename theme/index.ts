import { extendTheme } from "@chakra-ui/react";
import { components } from "./components";
import semanticTokens from "./semanticTokens";
import { sizes } from "./sizes";
import { breakpoints } from "./breakpoints";

const theme = extendTheme({
  semanticTokens,
  components,
  // sizes,
  breakpoints,
});

export default theme;
