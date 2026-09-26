import "./globals.css";
import Header from "./header";
import { Albert_Sans, Montserrat_Alternates} from "next/font/google"

const albert_sans = Albert_Sans({
  subsets:["latin"]
})
const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates"
})

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${albert_sans.className} ${montserratAlternates.variable}`}>
      <body className="min-h-screen flex flex-col m-[30px]">
        <Header />
        {children}
      </body>
    </html>
  );
}