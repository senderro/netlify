import type { Metadata } from "next";
import NavBar from "../../res/navbar";
import "../../global.css";
import Head from 'next/head'
import Footer from "../../res/footer";


export const metadata: Metadata = {
  title: "Marcos Lucio Advogacia",
  description: "GMarcos Lucio Advogacia Colatina",
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>My page stitle</title>
      </Head>
      <body>
        <NavBar/>
        <div> {/* Margem superior para o conteúdo */}
          {children}
        </div>
        <Footer />
      </body>
      
    </html>
  );
}
