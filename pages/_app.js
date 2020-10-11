import { useEffect } from "react";
import Prism from "prismjs";

import "../assets/css/color/green.css";
import "../assets/css/style.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Prism.highlightAll();
  });
  return <Component {...pageProps} />;
}

export default MyApp;
