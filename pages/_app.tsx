import '../styles/globals.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import Titlebar from '../components/Titlebar';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Titlebar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
