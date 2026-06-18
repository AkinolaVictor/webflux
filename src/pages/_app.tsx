import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import dataStore from "../redux/store"
import ModalContainer from "@/registry/locals/ModalContainer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={dataStore}>
      <div className="relative">
        <Component {...pageProps} />
        <ModalContainer />
      </div>
    </Provider>
  );
}
