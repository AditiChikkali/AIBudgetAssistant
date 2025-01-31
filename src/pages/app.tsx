import type { AppProps } from "next/app";
import "../styles/global.css"; // Import global styles

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
