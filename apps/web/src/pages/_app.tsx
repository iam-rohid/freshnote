import { config } from "@fortawesome/fontawesome-svg-core";
import "@/styles/main.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { CustomAppProps } from "@/types/next";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: CustomAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
