import type { Metadata } from "next";
import { Fraunces, Sora, Tiro_Bangla, Hind_Siliguri } from "next/font/google";
import { I18nProvider } from "@/i18n/I18nProvider";
import { getServerLang } from "@/i18n/getServerLang";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const tiroBangla = Tiro_Bangla({
  subsets: ["bengali"],
  weight: "400",
  variable: "--font-tiro-bangla",
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dhakacarrental.example"),
  title: {
    default: "Dhaka Car Rental — Safe, Reliable Car Hire in Dhaka",
    template: "%s | Dhaka Car Rental",
  },
  description:
    "Book verified drivers and well-maintained cars for airport transfers, city rides, outstation trips, weddings, and corporate travel across Dhaka, Bangladesh.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CarRental",
  name: "Dhaka Car Rental",
  url: "https://dhakacarrental.example",
  telephone: "+880-1711-234567",
  priceRange: "৳৳",
  address: {
    "@type": "PostalAddress",
    streetAddress: "House 14, Road 11, Banani",
    addressLocality: "Dhaka",
    postalCode: "1213",
    addressCountry: "BD",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = await getServerLang();

  return (
    <html
      lang={lang}
      data-lang={lang}
      className={`${fraunces.variable} ${sora.variable} ${tiroBangla.variable} ${hindSiliguri.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <I18nProvider initialLang={lang}>
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
