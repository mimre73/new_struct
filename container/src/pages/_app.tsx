import {store} from "@/core/infrastructure/datastore/redux";
import '@/index.css';
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { Suspense, lazy } from "react";
const Sidebar = lazy(() => import("app2/sideBar"));
const Header = lazy(() => import("app1/header"));

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Suspense fallback={"loading remote"}>
        <Header />
      </Suspense>
      <div className="flex flex-row">
        <div className="w-60">
          <Suspense fallback={"loading remote"}>
            <Sidebar />
          </Suspense>
        </div>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
