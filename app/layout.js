import { Layout } from "nextra-theme-docs";
import "nextra-theme-docs/style.css";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "thrivext",
  description: "Notes in Bangla covering various modern web technologies.",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link
          rel="icon"
          href="/thrivext/cropped-bEvKgIiUSIy-93xr4nDckg.webp"
          type="image/webp"
        />
      </Head>
      <body suppressHydrationWarning>
        <Layout
          navbar={<Navbar />}
          pageMap={await getPageMap()}
          sidebar={{
            defaultMenuCollapseLevel: 1,
          }}
          docsRepositoryBase="https://github.com/Takib-Ahmed/thrivext/tree/development"
          footer={<Footer />}
        >
          <main>{children}</main>
        </Layout>
      </body>
    </html>
  );
}
