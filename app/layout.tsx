import "./globals.css";
import Header from "./header";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col m-[30px]">
        <Header />
        {children}
      </body>
    </html>
  );
}