import { UniformContext } from "@uniformdev/context-react";
import type { UniformAppProps } from "@uniformdev/context-next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { createUniformContext } from "../lib/uniform/uniformContext";

import "../styles/globals.css";

const clientContext = createUniformContext();

function UniformContextApp({ Component, pageProps }: UniformAppProps) {
  return (
    <UniformContext context={clientContext} outputType={process.env.NODE_ENV === 'development' ? 'standard' : 'edge'}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </UniformContext>
  );
}

export default UniformContextApp;
