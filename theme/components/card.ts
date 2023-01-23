import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    backgroundColor: "chakra-card-bg",
  },
  // header: {
  //   paddingBottom: "2px",
  // },
  // body: {
  //   paddingTop: "2px",
  // },
  // footer: {
  //   paddingTop: "2px",
  // },
});

// const sizes = definePartsStyle({
//   md: {
//     container: {
//       borderRadius: "0px",
//     },
//   },
// });

export const cardTheme = defineMultiStyleConfig({ baseStyle });
