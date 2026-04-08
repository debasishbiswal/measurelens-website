import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "64px", minHeight: "100vh", background: "#06060F" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
