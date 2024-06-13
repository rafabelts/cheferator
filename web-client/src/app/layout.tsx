import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { AppProvider } from "~/context/context";
export const metadata = {
  title: "Cheferator",
  description: "Recipes recomendation with the power of graphs",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="overflow-x-scroll overflow-y-scroll">
        <AppProvider>
          {children}
          {modal}
          <div id="modal-root" />
        </AppProvider>
      </body>
    </html>
  );
}
