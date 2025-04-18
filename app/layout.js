import { Footer, Layout, Navbar } from "nextra-theme-docs";
import "nextra-theme-docs/style.css";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "./globals.css";

export const metadata = {
  title: "Bangla Tech Notes",
  description: "Notes in Bangla covering various modern web technologies.",
};

const navbar = (
  <Navbar
    logo={
      <>
        <b>Nextra</b>
        <span>Documentation</span>
      </>
    }
    projectLink="https://github.com/Rafsan12/nextra-blog"
  />
);

const footer = (
  <div className=" py-4  text-gray-500">
    <Footer>
      <h1 className="text-center">MIT {new Date().getFullYear()} © Nextra.</h1>
    </Footer>
  </div>
);

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body suppressHydrationWarning>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
