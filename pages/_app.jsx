import { Inter } from 'next/font/google'
import "../styles/global.css";

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export default function App({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}
