import type { AppProps } from "next/app";
import { useState } from "react";
import { GlobalStyle } from "lib/ui/GlobalStyle";
import { ThemeProvider } from "ui/ThemeProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { Navigation } from "navigation";
import "../style.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <GlobalStyle />
        {/* <Navigation> */}
        <Component {...pageProps} />
        {/* </Navigation> */}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
