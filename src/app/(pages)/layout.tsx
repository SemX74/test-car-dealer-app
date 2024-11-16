import Footer from "@/widgets/Footer";
import Header from "@/widgets/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col min-h-screen h-fit">
      <Header />
      <div className="my-12 container">{children}</div>
      <Footer />
    </main>
  );
}
