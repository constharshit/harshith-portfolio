import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { Montserrat, Open_Sans, Alumni_Sans, Inter } from "next/font/google";
import Head from "next/head";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

/* Uses App component to intialize the pages 
Component is the active page and whenerver navigate between routes this page will change to an active page
This font is variable and we do not have to write different type of weights*/

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});
const aluminisans = Alumni_Sans({
  subsets: ["latin"],
  variable: "--font-aluminisans",
});
export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/harshit-avatar.png" />
      </Head>
      <main
        className={`${inter.variable} font-inter bg-light dark:bg-dark w-full min-h-screen`}
      >
        <NavBar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>

        <Footer />
      </main>
    </>
  );
}
