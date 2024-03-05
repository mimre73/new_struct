import "@/index.css";
import type { AppContext, AppProps } from "next/app";
import StoreProvider from "container/store/provider";
import App from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
async function getInitialProps(ctx: AppContext) {
  const appProps = await App.getInitialProps(ctx);
  return appProps;
}
