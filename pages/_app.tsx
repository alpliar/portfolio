import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import PageLayout from "../layouts/PageLayout";
import theme from "../theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ChakraProvider>
  );
}
