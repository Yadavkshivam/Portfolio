import "./globals.css";

export const metadata = {
  title: "Hii!! Shivam this side.",
  description: "Portfolio site built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen w-full overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

