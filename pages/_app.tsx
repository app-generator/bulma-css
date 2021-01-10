import { FC } from "react";
import { AppProps } from "next/app";
import "../global.scss";

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
export default App;
