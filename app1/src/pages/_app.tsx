import "@/index.css";
import type { AppProps } from "next/app";
import StoreProvider from "container/store/provider";

export default function App({ Component, pageProps }: AppProps) {
  return <StoreProvider><Component {...pageProps} /></StoreProvider>;
}
