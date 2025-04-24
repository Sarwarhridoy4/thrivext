import { Footer, Layout, Navbar } from "nextra-theme-docs";
import "nextra-theme-docs/style.css";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "./globals.css";


export const metadata = {
  title: "thrivext",
  description: "Notes in Bangla covering various modern web technologies.",
};
const navbar = (
  <Navbar
  
    logo={
      <>
        <b className="text-2xl">Thrivext</b>
      </>
    }
    projectLink="https://github.com/Takib-Ahmed/thrivext"
  >
    {/* 🟡 Add your custom link here */}
  
  </Navbar>
);

const footer = (
  <div className="   text-gray-500">
    <Footer>
      <h1 className="text-center ">copyright {new Date().getFullYear()} © thrivext.</h1>
    </Footer>
  </div>
);

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>

      <link rel="icon" href="/thrivext/cropped-bEvKgIiUSIy-93xr4nDckg.webp" type="image/webp" />

      </Head>
      <body suppressHydrationWarning>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/Takib-Ahmed/thrivext/tree/main"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
